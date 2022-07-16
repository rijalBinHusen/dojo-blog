<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
    </div>
    <div v-if="posts.length" class="layout">
        <PostLists :posts="postsWithTag" />
        <TagCloud :posts="posts" />
    </div>
    <Spinner v-else />
</template>

<script>
import Spinner from "../components/Spinner.vue"
import PostLists from "../components/PostLists.vue"
import TagCloud from "../components/TagCloud.vue"
import getPosts from "../composables/getPosts"
import { useRoute } from "vue-router"
import { computed } from '@vue/reactivity'

export default {
    setup() {
        const route = useRoute()
        const { posts, error, load } = getPosts()

        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag))
        })

        return { error, posts, postsWithTag }
    },
    components: { PostLists, Spinner, TagCloud }
}
</script>

<style>
    .tag {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
</style>