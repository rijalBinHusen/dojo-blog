export default function (title, body, tags) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json " },
    body: JSON.stringify({
      title: title,
      body: body,
      tags: tags,
    }),
  })
    .then(() => {
      //   this.$router.push("/");
      alert("success");
    })
    .catch((err) => console.log(err));
}
