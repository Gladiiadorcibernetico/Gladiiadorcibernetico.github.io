import { postC } from "../modulo/crud.js";
import { mostrarlistado } from "../modulo/portada.js";


const get = localStorage.getItem("productos");
const conv = JSON.parse(get);



let contenedor = document.querySelector(".imagenes")



document.addEventListener('DOMContentLoaded', ()=> {

    mostrarlistado(conv , contenedor)

})





//let buy = document.getElementByClassName("btn2");
let arrayCarrito = []



document.addEventListener('click', ({target}) => {

   if(target.classList.contains('agregarZapatos')){

    let id = target.id;
    let producto = conv.find(item=> item.id == id);
    let indice = conv.indexOf(producto)

   
    arrayCarrito.push(producto)
   
   const u = arrayCarrito
     postC(u)

    

}})






