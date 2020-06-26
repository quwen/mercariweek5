<script>
  import { push } from "svelte-spa-router";
  import NoteList from "./components/NoteList.svelte";
  import { loadNotes } from "./lib/storage";

  const userNotes = loadNotes();
</script>

<style>
  .app-title {
    margin-bottom: 1em;
  }

  .add {
    display: block;
    background-color: mediumturquoise;
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
  <h1 class="app-title">My note</h1>
  <NoteList notes={userNotes} />
  <button class="add" on:click={() => push('/add')}>+ New note</button>

</div>
