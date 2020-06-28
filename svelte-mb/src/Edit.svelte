<script>
  import { push } from "svelte-spa-router";
  import NoteEditor from "./components/NoteEditor.svelte";
  import { db } from "./firebase";
  let currentDate = new Date();
  let title, content;
  export let params = {};

  const docRef = db.collection("notes").doc(params.id);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        title = doc.data().title;
        content = doc.data().content;
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });

  const Delete = () => {
    docRef.delete();
    push("/");
  };

  const onSave = () => {
    docRef.update({
      title: title,
      content: content,
      date: currentDate.toString()
    });

    push("/");
  };
</script>

<style>
  .add {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .button-container {
    padding: 1em 0;
    text-align: right;
  }

  .delete {
    background-color: darkred;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 1em;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  .save {
    background-color: teal;
    border: none;
    border-radius: 3px;
    color: white;
    font-size: 1em;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  .save:disabled {
    opacity: 0.3;
    cursor: auto;
  }
</style>

<div class="add">
  <NoteEditor bind:title bind:content />
  <div class="button-container">

    <button class="delete" on:click={Delete}>!Delete!</button>
    <button class="save" on:click={onSave} disabled={!title || !content}>
      Save
    </button>
  </div>
</div>
