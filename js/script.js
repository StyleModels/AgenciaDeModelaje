console.log("Style Models website loaded");

let header = document.querySelector(".header");

let lastScroll = 0;
let hideTimer;

// OCULTAR CUANDO HACES SCROLL HACIA ABAJO
window.addEventListener("scroll", function(){

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){
        header.classList.add("hide");
    }else{
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;

    resetTimer();
});


// OCULTAR SI NO SE USA EN 2 SEGUNDOS
function resetTimer(){

    clearTimeout(hideTimer);

    hideTimer = setTimeout(function(){
        header.classList.add("hide");
    },2000);

}


// MOSTRAR CUANDO EL CURSOR PASA POR ARRIBA
header.addEventListener("mouseenter", function(){
    header.classList.remove("hide");
});


// MOSTRAR SI EL CURSOR ESTA EN LA PARTE SUPERIOR
document.addEventListener("mousemove", function(e){

    if(e.clientY < 80){
        header.classList.remove("hide");
        resetTimer();
    }

});