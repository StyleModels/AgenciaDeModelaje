document.addEventListener("DOMContentLoaded", function(){

fetch("./menu.html")
.then(response => response.text())
.then(data => {

document.getElementById("menu-container").innerHTML = data;

/* activar bootstrap collapse */

var collapseTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
collapseTriggerList.map(function (collapseTriggerEl) {
return new bootstrap.Collapse(document.querySelector(collapseTriggerEl.getAttribute("data-bs-target")), {
toggle: false
})
})

})

})