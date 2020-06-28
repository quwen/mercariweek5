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
    padding: 2em;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>

{#if user}
  <Router {routes} />
{:else}
  <button on:click={login}>Signin with Google</button>
{/if}
<section />
<main>

  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
