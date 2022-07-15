<template>
  <div class="home">
    Home
    <PostLists :posts="posts" />
  </div>
</template>

<script>
/* eslint-disable */ 
import { computed, reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from '@vue/runtime-core';
import PostLists from "../components/PostLists.vue"
// @ is an alias to /src
// disable-eslint

export default {
  name: "Home",
  components: { PostLists },
  setup() {
    const posts = ref([
      { title: "build a web", body: "Lorem ipsum ;lsdjfppeoirpwoirpworiwpooeirwpoerwpeooriwpeooriwpperpeorqi[qwoe1=2--30=12-301==239112p3oeep[pirwporiwoepriwpeprdjf;sdjjfsfs;fklsdfklsdkf", id: 1 },
      { title: "build a web 2", body: "Lorem ipsum 2", id: 2 },
    ])

    return { posts };
  },
};
</script>
