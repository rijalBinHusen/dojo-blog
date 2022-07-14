<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
// @ is an alias to /src

export default {
  name: "Home",
  setup() {

    const p = ref(null)

    let name = "Rijal";
    let age = 27;

    const handleClick = () => {
      p.value.classList.add("testt")
      p.value.textContent = "Hello world"
      console.log(p, p.value)
    };

    return { name, age, handleClick, p }

  },
}
</script>
