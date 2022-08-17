/***************
/ SELECTORS
****************/

const botonNavbar = document.getElementById("botonNavbar");
const botonNavbarAux= document.getElementById("botonNavbarAux");

const imagenPrueba= document.getElementById("prueba");
/***************
/ Listeners
****************/
botonNavbar.addEventListener("click",()=>{
    botonNavbar.classList.toggle("fa-xmark");
    botonNavbar.classList.toggle("fa-bars");
    
});

var numeroClicks=0;

imagenPrueba.addEventListener("click",()=>{
    if(numeroClicks>=3){
        imagenPrueba.classList.toggle("claseAñadida");
    }
    numeroClicks++;
});
// botonNavbarAux.addEventListener("click",()=>{
//     botonNavbar.classList.toggle("fa-xmark");
//     botonNavbar.classList.toggle("fa-bars");
// });


/***************
/ Funciones
****************/
function neonBackground(){
    let amount = 20;
    let body =  document.querySelector("body");
    for(let i=0;i<amount;i++){
        let drop= document.createElement("i");
        drop.classList.add("lluvia");
        let size = Math.random() *5;
        drop.style.width = 0.2 + size + "px";

        let posX= Math.floor(Math.random() *window.innerWidth)-30;
        drop.style.left = posX + "px";

        body.appendChild(drop);
    }
}


/***************
/ Ejecuciones
****************/

//neonBackground();

