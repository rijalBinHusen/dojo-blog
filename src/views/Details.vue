<template>
    <div v-if="error">
        {{ error }}
    </div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre"> {{ post.body }} </p>
    </div>
    <Spinner v-else/>
</template>

<script>
/* eslint-disable */
import getPost from "../composables/getPost"
import Spinner from "../components/Spinner.vue"
import { useRoute } from "vue-router"
export default {
    props: ['id'],
    components: { Spinner },
    setup() {
        const route = useRoute()
        const { post, error, load } = getPost(route.params.id)

        load()

        return { post, error}
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
</style>