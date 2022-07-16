<template>
  <div class="home">
    Home
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostLists :posts="posts" />
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
/* eslint-disable */ 
import PostLists from "../components/PostLists.vue"
import getPosts from "../composables/getPosts"
import Spinner from "../components/Spinner.vue"

export default {
  name: "Home",
  components: { PostLists, Spinner },
  setup() {
    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error };
  },
};
</script>

<style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>