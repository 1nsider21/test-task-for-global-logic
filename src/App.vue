<template>
  <header class="header">
    <router-link to="/">
      <h1 class="header__title">VueMovies Database</h1>
    </router-link>
  </header>
  <main class="main">
    <router-view/>
  </main>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: 'Fira sans', sans-serif ;
    background: lightgrey;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: grey;
    box-shadow: 5px 5px 15px 5px #000000;
  }

  .header__title {
    color: #42B883;
  }

  .main {
    padding: 40px 20px 0;
  }
</style>
