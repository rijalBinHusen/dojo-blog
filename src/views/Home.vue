<template>
  <div class="home">
    Home
    <p>My name is {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Age++</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src
// disable-eslint

export default {
  name: "Home",
  setup() {
    const name = ref("Rijal");
    const age = ref(27);

    const handleClick = () => {
      name.value = "Husen";
    };

    return { name, age, handleClick };
  },
};
</script>
