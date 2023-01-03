<template>
    <main>
    <div class="Principal">
        <footer class="footer">
            <div class="contenedor">
                <h2 class="titulo-footer">Contactanos</h2>
                <h3 class="subtitulo-footer">Gracias por preferirnos</h3>
                <div class="footer">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Nombre" required>
                        <input type="email" name="" id="" placeholder="Email" required>
                        <input type="text" name="" id="" placeholder="Telefono" required>
                        <input type="text" name="" id="" placeholder="Direccion" required>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese su mensaje..."></textarea>
                        <input type="submit" value="Enviar">
                    </form>
                </div>
            </div>
        </footer>
    </div>
</main>
    <main>
        <div>
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
    </div>
</main>
    </template>
<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: var(--padding-container);
}

.footer {
    background-color: #280f36;
}

.footer__copy {
    --padding-container: 30px 0;
    text-align: center;
    color: #fff;
}


.footer__img {
    width: 30px;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.contenedor {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 52px 0;
}

.titulo-footer,
.subtitulo-footer {
    color: #fff;
    text-align: center;
    font-weight: 400;
    font-size: 56px;
}

.subtitulo-footer {
    font-size: 16px;
    margin-bottom: 64px;
}

form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
}

input[type="text"],
input[type="email"] {
    display: inline-block;
    width: 48%;
    padding: 13px;
    border: none;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    background: rgba(37, 37, 33, .7);
    margin-bottom: 16px;
    border-top: 5px solid rgba(37, 37, 33, .7);
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    border-top: 5px solid rgba(255, 255, 255, 0.7);
}

textarea {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 200px;
    background: rgba(37, 37, 33, .7);
    padding: 13px;
    border: none;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 16px;
}

input[type="submit"] {
    display: inline-block;
    padding: 13px;
    border: none;
    color: #fff;
    background: rgba(37, 37, 33, .7);
    width: 96px;
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

</style>