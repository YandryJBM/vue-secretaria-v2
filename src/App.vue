<script>
import { RouterView } from "vue-router";
</script>

<template>
  <div class=bar-nav>
    <header class="hero">
    <nav class="nav container">
            <div class="LogoUleam">
               <img src="../src/assets/logouleam.png">
            </div>
            <div class="nav__logo">
              <a href="/" class="nav__title">|Secretaria Virtual</a>   
            </div>
        </nav>
  </header>
  <router-view/>
  </div>
</template>>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: ubuntu;
  background-color: #099e79;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
    background-color: rgb(45, 219, 161);
}
.hero {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 100px 1fr;
  color: #fff;
}

.hero::before {
  content: "";
  position: absolute;
  z-index: -1;
}
.hero__container {
    max-width: 800px;
    --padding-container: 0;
    display: grid;
    grid-auto-rows: max-content;
    align-content: center;
    gap: 2em;
    padding-bottom: 50px;
    text-align: center;
}

.hero__title {
    font-size: 3rem;
}

.hero__paragraph {
    margin-bottom: 5px;
    margin-top: 10px;
}
.nav {
  --padding-container: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.nav__title {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-align:left;
  font-weight: 700;
  text-shadow: 2px  1px 2px black,
             1px  1px 1px black,
            -2px  1px 2px black,
             2px -1px 2px black;
}
.nav__link {
  margin-left: auto;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 2em;
  font-size: 20px;
  text-shadow: 2px  1px 2px grey,
             1px  1px 1px grey,
            -2px  1px 2px grey,
             2px -1px 2px grey;
}
.nav__items {
  list-style: none;
}
.nav__links {
  color: #fff;
  text-decoration: none;
}
.nav__menu {
  margin-left: auto;
  cursor: pointer;
  display: none;
}
.nav__img {
  display: block;
  width: 30px;
}
.nav__close {
  display: var(--show, none);
}
.LogoUleam{
    display: flex;
    width: 250px;
    position: left;
}
.LogoUleam img{
    margin-left: 0px;
    height: 70px;
    width: 250px;
    position: 1000px;
}


</style>
