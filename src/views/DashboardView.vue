<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const logout = () => {
  userStore.logout();
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Secretaria").addEventListener('submit', validarFormulario); 
  });
function validarFormulario(evento){
    evento.preventDefault();
    var nombre = document.getElementById('nombred').value;
    if (nombre.length > 20 || !nombre.trim("")) {
        document.getElementById("n-error").innerHTML = "Nombre no válido";
        return;
    }
    else{
        document.getElementById("n-error").innerHTML = "";
    }
    var carrera = document.getElementById('carrera').value;
    if (carrera==0) {
        document.getElementById("c-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("c-error").innerHTML = "";
    }
    var nivel = document.getElementById('nivel').value;
    if (nivel==0) {
        document.getElementById("nv-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("nv-error").innerHTML = "";
    }
    var paralelo = document.getElementById('paralelo').value;
    if (paralelo==0) {
        document.getElementById("p-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("p-error").innerHTML = "";
    }
    
    var asignatura = document.getElementById('asignatura').value;
    if (asignatura==0) {
        document.getElementById("a-error").innerHTML = "Opción no válida";
        return;
    }
    else{
        document.getElementById("a-error").innerHTML = "";
    }
    this.submit();
}

</script>


<template>
    <header>

           <div class="menu">
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Retiro de Carrera</h2></button></a>
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Justificacion Falta</h2></button></a>
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Cambio Carrera</h2></button></a>
            </div> 
            <div class="menu">
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Becas</h2></button></a>
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Legalizar Matricula</h2></button></a>
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Titulacion</h2></button></a>
            </div> 
            <div class="menu">
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Solictud De Documentos</h2></button></a>
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Homologacion Materia</h2></button></a>
                <a class="dos" href="/descargas"><button class="sbutton"><h2>Vinculacion</h2></button></a>
            </div> 
    </header>
    <main>
          <section class="container about">
            <section class="buttons">
                 <button class="buttons__btn buttons__btn--logout" @click.prevent="logout">Cerrar Sesion</button>
                 <a href="/info1"><button class="buttons__btn buttons__btn--logout">Informacion</button></a>
            </section>
              <nav class="nav">
                <a href="#"><pre><center>-----</center></pre></a>
              </nav>
              <footer class="footer">
                 <section class="footer__copy container">
            <div class="logo2">
                <img src="../assets/logouleam.png">
            </div>
            <nav class="navv">
                <a href="#"><pre><center>ULEAM @ Copyright 2022, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí</center></pre></a>
                <a href="#"><pre><center>Dirección: Av. Circunvalación - Vía a San Mateo</center></pre></a>
                <a href="#"><pre><center>Manta - Manabí - Ecuador</center></pre></a>
            </nav>
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
  height: 1000px;
  background-image: url(../assets/Fondo1.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  
}

.buttons__btn {
    text-decoration: none;
  padding: 1.3em 3em;
  font-size: 12px;
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
  font-size: 15px
}

.buttons__btn--logout:hover {
  background-color: #db1f18;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
  font-size: 17px
}

.about {
    text-align: center;
}

.footer {
    background-color: #232325;
}

.footer__img {
    width: 30px;
}

div .menu{
    position: center;
    display: flex;
    padding-top: 40px;
    gap: 35px;
    align-items: center;
    margin-left: 200px;
    margin-right: 200px;
    justify-content: space-evenly;
    height: 280px;
}

.sbutton:hover{
    background-color: rgb(207, 166, 32);
    width: 260px;
    height: 190px;
    transition: .2s;
}

.sbutton{ 
    width: 250px;
    height: 180px;
    border-radius: 10px;
    border-color: #ffffff;
    box-shadow: 4px 4px 4px 0px;
    transition: .2s;
    cursor: pointer;
}

.logo2 img{
    align-content: center;
    height:60px;
    width: 190px;
}

.navv a{
    text-decoration: none;
    color: rgb(228, 231, 229);
    display:contents;
    padding: 15px;
    margin: auto;
    text-align: center;
    cursor: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px
}
.nav a{
    text-decoration: none;
    color: rgb(45, 219, 161);
    display:contents;
    padding: 15px;
    margin: auto;
    text-align: center;
    cursor: none;
    font-family: Arial, Helvetica, sans-serif;
}

</style>
