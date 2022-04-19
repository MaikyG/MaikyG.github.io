const botao = document.querySelector("nav h2");
const linkMenu = document.querySelector(".lista-links");
const icone = document.querySelector(".icone");


botao.addEventListener("click",function(event){
    event.preventDefault();
    linkMenu.classList.toggle("aberto");

    if (linkMenu.classList.contains("aberto")) {
        icone.innerHTML = "fechado";
    } else {
        icone.innerHTML = "Menu &equiv;";
    }

});