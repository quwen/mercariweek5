<script>
  import { push } from "svelte-spa-router";
  import NoteEditor from "./components/NoteEditor.svelte";

  import { db } from "./firebase";

  let title = "New Note";
  let content = "";
  let currentDate = new Date();
  let date, month, year;

  $: {
    date = currentDate.getDate();
    month = currentDate.getMonth();
    year = currentDate.getDate();
  }

  function add() {
    db.collection("notes")
      .add({
        title,
        content,
        date: currentDate.toString()
      })
      .then(function(docRef) {
        let noteid = docRef.id;
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  /*
  let title = "New Note";
  let content = "";
*/
  const onSave = () => {
    add();
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

  .save {
    background-color: rgb(62, 68, 163);
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

    <botton class="save" on:click={onSave} disabled={!title || !content}>
      Save
    </botton>
  </div>
</div>
