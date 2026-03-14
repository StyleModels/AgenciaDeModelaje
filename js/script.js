document.addEventListener("DOMContentLoaded", function(){

fetch("./menu.html")
.then(response => response.text())
.then(data => {

document.getElementById("menu-container").innerHTML = data;

/* REINICIAR BOOTSTRAP PARA EL MENU */

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
collapseElementList.map(function (collapseEl) {
return new bootstrap.Collapse(collapseEl, {
toggle: false
})
})

})

})