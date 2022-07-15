import { ref } from "@vue/reactivity";
import wait from "./wait";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      await wait(3000);
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("no data available");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      // console.log(error.value)
    }
  };

  return { post, error, load };
};

export default getPost;
