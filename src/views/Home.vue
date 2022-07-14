<template>
  <div class="home">
    Home
    <input type="text" v-model="search" />
    <p>Search item: {{ search }}</p>
    <button @click="handleClick">Stop watching</button>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import { computed, reactive, ref } from "@vue/reactivity";
import { watch, watchEffect } from '@vue/runtime-core';
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

    const stopWatch = watch(search, () => {
      console.log("watch function run")
    })

    const stopwatchEffect = watchEffect(() => {
      console.log("Watch effect run", search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopwatchEffect()
    }

    return { names, search, matchingNames, handleClick };
  },
};
</script>
