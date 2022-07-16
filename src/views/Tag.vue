<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
    </div>
    <div v-if="posts.length">
        <PostLists :posts="postsWithTag" />
    </div>
    <Spinner v-else />
</template>

<script>
import Spinner from "../components/Spinner.vue"
import PostLists from "../components/PostLists.vue"
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
    components: { PostLists, Spinner }
}
</script>