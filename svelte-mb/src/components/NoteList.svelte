<script>
  import { push } from "svelte-spa-router";
  export let notes;
</script>

<style>
  .note {
    color: rgb(63, 62, 60);
  }

  .card {
    background-color: rgb(255, 254, 253);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    position: relative;
    padding: 1em;
    cursor: pointer;
  }

  .card:not(:last-of-type) {
    margin-bottom: 1em;
  }

  .card .card-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .card .card-date {
    text-align: end;
  }

  .card .card-content {
    white-space: pre-wrap;
    line-height: 1.5;
  }
</style>

<div class="note">
  {#each notes as note}
    <div class="card" on:click={() => push(`/edit/${note.id}`)}>
      <div class="card-title">{note.title}</div>
      <div class="card-date">{note.date}</div>
      <div class="card-content">{note.content}</div>
    </div>
  {/each}
</div>
