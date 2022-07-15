<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ snippet }}</p>
    </div>
</template>

<script>
/* eslint-disable */ 
import { computed } from '@vue/reactivity'
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 5) + '....'
        })

        return { snippet }
    },
}
</script>