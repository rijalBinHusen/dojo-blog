<template>
  <h3>Realtime</h3>
  <PostLists :posts="posts" />
</template>

<script>
/* eslint-disable */
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/firebaseApp'
import PostLists from "../components/PostLists.vue"
export default {
    setup() {
        
        const posts = ref([])
        projectFirestore.collection("posts")
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let docs = snap.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id}
                })
                // console.log("documents: ", docs)
                posts.value = docs
            })
            return { posts }
    },
    components: { PostLists }
}
</script>

<style>

</style>