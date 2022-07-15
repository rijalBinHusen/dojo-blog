<template>
  <div class="home">
    Home
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostLists :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
/* eslint-disable */ 
import { computed, reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from '@vue/runtime-core';
import PostLists from "../components/PostLists.vue"

export default {
  name: "Home",
  components: { PostLists },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts")
        if(!data.ok) {
          throw Error("no data available")
        }
        posts.value = await data.json()
      }
      catch(err) {
        error.value  = err.message
        // console.log(error.value)
      }
    }

    load()

    return { posts, error };
  },
};
</script>
