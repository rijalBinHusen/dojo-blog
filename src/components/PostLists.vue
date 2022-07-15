<template>
    <div class="post-lists">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
/* eslint-disable */ 
import SinglePost from "./SinglePost.vue"
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => console.log("Component mounted"))
        onUnmounted(() => console.log("Component unmounted"))
        onUpdated(() => console.log("component updated"))
    },
}
</script>