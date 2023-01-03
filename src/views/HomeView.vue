<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
  
    <div class="texts">
      <h1 class="hero__title">Tus Tramites Desde La Comodidad De Tu Casa.</h1>
            <h2 class="hero__paragraph">Te Facilitamos Tus Tramites.</h2>
           <section class="buttons">
            <router-link class="buttons__btn buttons__btn--login" to="/login"
           >Inicia Sesion</router-link>
           <router-link class="buttons__btn buttons__btn--register" to="/register"
           >Registrate</router-link>
           <router-link class="buttons__btn buttons__btn--Contactanos" to="/contacto"
           >Contactanos</router-link>
          </section>
    </div>
  </header>
  <main>
        <section class="container about">
            <h2 class="subtitle">Sobre Nosotros</h2>
            <p> Nuestro objetivo se basa en facilitar todos aqquellos tramites personales que debeas hacer en tu facultad o la universidad Desde
                la comodidad de tu casa, asi de mas usas en los cuales puedes tener mas informacion precisa de cuales son lso requisitos que vas
                a necesitar a lo largo de tu tramite.</p>
            <div class="about__main">
                <article class="about__icons">
                    <img src="../assets/guardar.png" class="about__icon">
                    <h2 class="about__title">Fácil de utilizar</h2>
                    <p class="about__paragrah">Descarga y sube documentes en los formatos mas accesibles como pdf y word.</p>
                </article>

                <article class="about__icons">
                    <img src="../assets/notificacion.png" class="about__icon">
                    <h2 class="about__title">Notificaciones</h2>
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
header {
  width: 100%;
  height: 750px;
  background-image: url(../assets/indexbiblioteca.png);
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
.buttons {
  display: flex;
  justify-content: space-evenly;
  
}

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #282828;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.buttons__btn--login:hover {
  background-color: #18db28;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--Contactanos:hover {
  background-color: #fa1818;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--register:hover {
  background-color: #f5df1d;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}
.about {
    text-align: center;
    font-size: 20px
}


.footer {
    background-color: #232325;
}

.footer__img {
    width: 30px;
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
  color: rgb(7, 7, 7);
  font-family: Helvetica, Arial, sans-serif;
}
</style>
