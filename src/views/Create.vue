<template>
<div class="create">
    <form @submit.prevent="handleSubmit">
        <label for="title">Title blog:</label>
        <input v-model="title" type="text" required id="title">
        <label for="content">Content blog:</label>
        <textarea v-model="body" id="content" cols="30" rows="10" required></textarea>
        <label for="tag">Tags (hit enter to add tag)</label>
        <input 
            v-model="tag" 
            type="text" 
            id="tag"
            @keydown.enter.prevent="handleKeydown"
        >
        <div v-for="tag in tags" :key="tag" class="pill">
            #{{ tag }}
        </div>
        <button>Add post</button>
    </form>
</div>
</template>

<script>
/* eslint-disable */ 
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router"
import createPost from "../composables/Createpost"
import { timestamp } from '../firebase/firebaseApp'

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')

        const tags = ref([])

        const handleKeydown = () => {
            if(!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/, '') //remove all whitespace
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            router.push({ name: "Home" })
            await createPost({ 
              title: title.value, 
              body: body.value, 
              tags: tags.value,
              createdAt: timestamp(),
            })
        }

        const router = useRouter()

        return { title, body, tag, handleKeydown, tags, handleSubmit }
    },
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>