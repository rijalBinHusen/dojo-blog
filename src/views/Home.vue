<template>
  <div class="home">
    Home
    <p>{{ name }}</p>
  </div>
</template>

<script>
/* eslint-disable */ 
import { computed, reactive, ref } from "@vue/reactivity";
// @ is an alias to /src
// disable-eslint

export default {
  name: "Home",
  setup() {
    const name = computed(() => {
      return "Rijal"
    })

    return { name };
  },
};
</script>
