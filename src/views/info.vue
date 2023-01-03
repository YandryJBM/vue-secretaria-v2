<template>
<head>
    <meta charset="UTF-8">
    <title>Docente-E</title>
</head>
<body>
    <header>
    </header>
    <section class="pantalla-d">
        <div class="derecha">
            <div class="pngnombre"><img src="../assets/profesor.png"><br> 
                <h3 class="docente">Ing. Roberto Castro Cedeño</h3></div> 
        </div>
        <div class="izquierda">
            <h2 > 
                <img src="../assets/icon1.svg" align="left">Manta-Manabi
            </h2>
            
                <h2 > 
                    <img src="../assets/icon2.svg" align="left">Universidad Laica Eloy Alfaro de Manabi
                </h2>
                    <h2 > 
                        <img src="../assets/Icon3.svg" align="left">D0805472358@live.uleam.edu.ec
                </h2>
                        <h2 > 
                            <img src="../assets/Icon4.svg" align="left">Idiomas
                        </h2>
                        <a href="/dashboard" >
            <button onclick="" class="bottonr">
                <h3 >Regresar </h3>
            </button>
        </a>
    </div>
    <footer>
        <div class="LogoUleam2">
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
</body>
</template>
<style>
.pantalla-d
{
    display:flex;
    
}

.izquierda{
    background-color: #314792;
    width: 55%;
    height: 80vh;
    display: grid;
    align-content: center;
    color: snow;
    
}
.bottonr{
    position: relative;
     top:500px;
     left: 300px;
}
.derecha{
    background-color: #6689a3;
    width: 45%; 
    height: 80vh;
    align-content: center;

}
h2 img{
    height: 35px;
    width: 35px;
    font-size: 40PX;

}
.LogoUleam2{
    margin-left: 40px;
    align-content: center;
    height:60px;
    width: 390px;
}

.pngnombre img{
    height: 300px;
    width: 300px;
    text-align: center;
    position: absolute;
    top:170px;
    left: 110px;
}

a{
    text-decoration: none;
    color: black;
    display: inline-flex;
    padding: 15px;
    margin: auto;
    
}


a button:hover{
    background-color: rgb(17, 150, 150);
    width: 115px;
    height: 55px;
    transition: .2s;
    
}

.docente{
    text-align: center;
    transform: translate(-176px, 402px);
}
img{
    width: 10%;
    margin-top: auto;
    

  }

.LogoUleam{
    display: flex;
    width: 250px;
}
.LogoUleam img{
    margin-left: 0px;
    height: 70px;
    width: 250px;
}

footer img{
    margin-left: 19px;
    margin: -12px;
    height: 67px;
    width: 228px; 
}

a button{
    color: white;
    background-color: rgb(18, 11, 122);
    border-radius: 10px;
    width: 110px;
    height: 50px;
    cursor: pointer;
    margin-right: 40px;
    border-color: none;
    transition: .2s;
    position: relative;

}


footer{
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 170px;
    background-color: #232325;
    padding-top: 30px;
    align-items: center;
    color: white;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    text-align: center;
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

.footer__img {
    width: 50px;
}
</style>