<template>
    <div v-if="error">
        {{ error }}
    </div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre"> {{ post.body }} </p>
        <button class="delete" @click="handleClick">Delete post</button>
    </div>
    <Spinner v-else/>
</template>

<script>
/* eslint-disable */
import getPost from "../composables/getPost"
import Spinner from "../components/Spinner.vue"
import { useRoute, useRouter } from "vue-router"
import { projectFirestore } from '../firebase/firebaseApp'
export default {
    props: ['id'],
    components: { Spinner },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const { post, error, load } = getPost(route.params.id)

        load()

        const handleClick = async () => {
            await projectFirestore.collection("posts").doc(route.params.id).delete()
            router.push("/")
        }

        return { post, error, handleClick }
    },
}
</script>

<style scoped>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }
    .poost p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre {
        white-space: pre-wrap;
    }
    button.delete {
        margin:10px auto;
    }
</style>