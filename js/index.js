const imgMenuHamburguer = document.getElementById("imgMenuHamburguer");
const menuMobile = document.getElementsByClassName("menuMobile")[0];

imgMenuHamburguer.addEventListener("click", ()=>{
    menuMobile.classList.toggle("active")
})