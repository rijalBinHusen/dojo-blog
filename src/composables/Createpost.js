import { projectFirestore } from "../firebase/firebaseApp";

export default function (obj) {
  return projectFirestore
    .collection("posts")
    .add(obj)
    .then()
    .catch((err) => console.log(err));
}
