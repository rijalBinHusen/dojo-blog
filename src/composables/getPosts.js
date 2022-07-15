import { ref } from "@vue/reactivity";
import wait from "./wait";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      await wait(3000);

      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("no data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      // console.log(error.value)
    }
  };

  return { posts, error, load };
};

export default getPosts;
