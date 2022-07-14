<template>
  <div class="home">
    Home
    <input type="text" v-model="search" />
    <p>Search item: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
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
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'rijal', 'husen', 'alula', 'aisyah'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames };
  },
};
</script>
