<script>
  import { push } from "svelte-spa-router";
  import NoteList from "./components/NoteList.svelte";

  import { db } from "./firebase";
  let notes = [];

  db.collection("notes")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(docRef) {
        notes = [
          ...notes,
          {
            id: docRef.id,
            title: docRef.data().title,
            content: docRef.data().content
          }
        ];
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
</script>

<style>
  .add {
    display: block;
    background-color: slateblue;
    border: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1.5em;
    width: 100%;
    padding: 0.5em 0;
    margin: 1em 0;
    cursor: pointer;
  }
</style>

<div class="home">

  <NoteList {notes} />
  <button class="add" on:click={() => push('/add')}>+ New note</button>

</div>
