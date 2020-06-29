<script>
  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";
  let user;
  authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  /*
  let email,
    password = "";

  function testlogin() {
    auth.signInWithEmailAndPassword(email, password);
  }
*/
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

  const testroutes = {
    "/": Home
  };
</script>

<style>
  main {
    background-color: aliceblue;
    margin-left: 300px;
    padding: 2em;
    height: 100%;
    overflow-y: auto;
  }

  button {
    background-color: gainsboro;
    border: none;
    border-radius: 3px;
    color: black;
    font-size: 1em;
    padding: 0.5em 1em;
    cursor: pointer;
  }

  #header {
    width: 300px;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    background-color: midnightblue;
    color: white;
    position: fixed;
    padding: 1em;
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
    <!--
    <button on:click={testlogin}>Sign in as a test user</button>
    <input blind:value={email} placeholder="enter test email" />
    <input blind:value={password} placeholder="enter test password" />
    -->
  {/if}

</main>
