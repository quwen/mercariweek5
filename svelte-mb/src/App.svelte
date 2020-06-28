<script>
  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";
  let user;
  authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  import Router from "svelte-spa-router";
  import Home from "./Home.svelte";
  import Add from "./Add.svelte";
  import Edit from "./Edit.svelte";

  const routes = {
    "/": Home,
    "/add": Add,
    "/edit/:id": Edit,
    "*": Home
  };
</script>

<style>
  main {
    background-color: antiquewhite;
    margin-left: 300px;
    padding: 2em;
    height: 100%;
    overflow-y: auto;
  }

  #header {
    width: 300px;
    height: 100%;
    display: flex;
    background-color: midnightblue;
    color: white;
    position: fixed;
    text-align: right;
  }
  #header .app-title {
    margin-bottom: 1em;
  }
</style>

<div id="header">
  <h1 class="app-title">My note</h1>
</div>

<main>

  {#if user}
    <Router {routes} />
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}

  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
