<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const email = ref("");
const password = ref("");

const userStore = useUserStore();

const login = () => {
  userStore.login(email.value, password.value);
};

</script>

<template>
<header>
  <div class="login">
    <h2>Inicio Sesion</h2>
    <form @submit.prevent="login">
      <div class="login__input">
        <input type="text" required v-model="email"/>
        <label>Usuario</label>
      </div>
      <div class="login__input">
        <input type="password" required v-model="password"/>
        <label>Contraseña</label>
      </div>

      <button class="login__submit" type="submit">Iniciar Sesion</button>
    </form>
  </div>
</header>
<main>
      <section class="container about">
          <h1 class="subtitle">Sobre Nosotros</h1>
          <p> Nuestro objetivo se basa en facilitar todos aqquellos tramites personales que debeas hacer en tu facultad o la universidad Desde
              la comodidad de tu casa, asi de mas usas en los cuales puedes tener mas informacion precisa de cuales son lso requisitos que vas
              a necesitar a lo largo de tu tramite.</p>
          <div class="about__main">
              <article class="about__icons">
                  <img src="../assets/guardar.png" class="about__icon">
                  <h3 class="about__title">Fácil de utilizar</h3>
                  <p class="about__paragrah">Descarga y sube documentes en los formatos mas accesibles como pdf y word.</p>
              </article>

              <article class="about__icons">
                  <img src="../assets/notificacion.png" class="about__icon">
                  <h3 class="about__title">Notificaciones</h3>
                  <p class="about__paragrah">Te notificará las nuevas actualizaciones mediante correo. </p>
              </article>
              <br>
          </div>
          <footer class="footer">
            <div class="logo2">
                <img src="../assets/logouleam.png">
            </div>
            <nav class="navv">
                <a href="#"><pre><center>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</center></pre></a>
                <a href="#"><pre><center>Dirección: Av. Circunvalación - Vía a San Mateo</center></pre></a>
                <a href="#"><pre><center>Manta - Manabí - Ecuador</center></pre></a>
            </nav>
      <section class="footer__copy container">
          <div class="footer__social">
              <a href="https://www.facebook.com/Facci.Uleam/">
              <img src="../assets/facebook.svg" class="footer__img">
              </a>
              <a href="https://twitter.com/facciuleam">
              <img src="../assets/twitter.svg" class="footer__img">
              </a>
              <a href="https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ">
              <img src="../assets/youtube.svg" class="footer__img">
              </a>
          </div>
      </section>
</footer>
      </section>
  </main>
</template>


<style scoped>

.login {
  margin: 100px auto;
  width: 400px;
  padding: 40px;
  background: #282828;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login h2 {
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
}

.login .login__input {
  position: relative;
}

.login .login__input input {
  font-size: 18px;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login .login__input label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login .login__input input:focus ~ label,
.login .login__input input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login__submit {
  color: #1b1c1b;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: none;
  cursor: pointer;
}

header {
  width: 100%;
  height: 750px;
  background-image: url(../assets/facci.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
}

.texts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.texts__title {
  font-size: 3.5rem;
  text-shadow: 2px  1px 2px black,
             1px  1px 1px black,
            -2px  1px 2px black,
             2px -1px 2px black;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  
}

.about {
    text-align: center;
}


.footer {
    background-color: #232325;
}


.footer__img {
    width: 35px;
}



.logo2 img{
    align-content: center;
    height:60px;
    width: 190px;
}

.navv a{
    text-decoration: none;
    color: rgb(231, 228, 228);
    display:contents;
    padding: 15px;
    margin: auto;
    text-align: center;
    cursor: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px
}

p {
  color: rgb(0, 0, 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 20px
}
</style>
