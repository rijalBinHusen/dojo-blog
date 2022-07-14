<template>
  <div class="home">
    Home
    <p>My name is {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    let name = "Rijal";
    let age = 27;

    const handleClick = () => {
      console.log("clicked")
    };

    return { name: name, age: age, handleClick }

  },
}
</script>
