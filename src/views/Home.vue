<template>
  <div class="home">
    Home
    <p>My name is {{ ninjaOne.name }} my age is {{ ninjaOne.age }}</p>
    <button @click="handleClick">Click me</button>
    <h1>Reactive</h1>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
// @ is an alias to /src
// disable-eslint

export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "Rijal", age: 27 });
    const ninjaTwo = reactive({ name: "Husen", age: 47 })

    const handleClick = () => {
      ninjaOne.value.age = 37;
      // we dont ne access the .value here
      // but we can't change the reactive when the data is primitive e.g = reactive("string")
      ninjaTwo.age = 50;
    };

    return { ninjaOne, ninjaTwo, handleClick };
  },
};
</script>
