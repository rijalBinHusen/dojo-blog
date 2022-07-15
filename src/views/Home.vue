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
import PostLists from "../components/PostLists.vue"
import getPosts from "../composables/getPosts"

export default {
  name: "Home",
  components: { PostLists },
  setup() {
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error };
  },
};
</script>
