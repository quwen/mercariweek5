import App from "./App.svelte";
import firebase from "firebase";
import { firebaseConfig } from "./../../firebase-config";
firebase.initializeApp(firebaseConfig);

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
