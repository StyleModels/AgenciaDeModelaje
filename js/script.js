/* CARGAR MENU GLOBAL */

fetch("./menu.html")
.then(response => response.text())
.then(data => {

document.getElementById("menu-container").innerHTML = data;

/* DESPUES DE CARGAR EL MENU */

const header = document.querySelector(".navbar-stylemodels");

let lastScroll = 0;
let hideTimer;

/* detectar si es pantalla grande */

function isDesktop(){
    return window.innerWidth > 992;
}

/* OCULTAR AL BAJAR SCROLL */

window.addEventListener("scroll", function(){

    if(!isDesktop()) return;

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){
        header.style.top = "-90px";
    }else{
        header.style.top = "0";
    }

    lastScroll = currentScroll;

    resetTimer();

});

/* OCULTAR SI NO SE USA */

function resetTimer(){

    if(!isDesktop()) return;

    clearTimeout(hideTimer);

    hideTimer = setTimeout(function(){
        header.style.top = "-90px";
    },2000);

}

/* MOSTRAR CUANDO EL CURSOR PASA ARRIBA */

document.addEventListener("mousemove", function(e){

    if(!isDesktop()) return;

    if(e.clientY < 80){
        header.style.top = "0";
        resetTimer();
    }

});

});