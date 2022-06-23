
import { getData } from "../modulo/getData.js";

const url = "http://localhost:4000/carrito"

 const data = await getData(url)
const arregloDataC = data.flat();


 localStorage.setItem('carrito', JSON.stringify(arregloDataC));
let arregloCarro = localStorage.getItem('carrito')
const convArregloCarro = JSON.parse(arregloCarro)




let contenedor = document.querySelector(".contenedorProduct");



document.addEventListener('DOMContentLoaded', ()=> {
 
  contenedor.innerHTML = ""

  convArregloCarro.forEach((element) => {
 
    const {imagen , titulo, condition, precio ,talla, id} = element

 
contenedor.innerHTML += `   
<div class="contenedorProducto">
<img class="imgProducto" src ="${imagen}" alt="imag">
<h4 class="producto">${titulo}</h4>

<h5 class="estado">${condition}</h5>
<h3 class="precio">${precio}</h3>



<button class="remover" id="${id}">Remove</button>
</div>
`

  })})






//document.addEventListener('click', ({target}) => {

   // if(target.classList.contains('remover')){

 
     //let id = target.id;
    
    
   //  let producto = convCarrito.find(item=> item.id == id);
     //indice = convCarrito.indexOf(producto)
     
     //deleteP(`http://localhost:4000/carrito/${indice}`)


     //convCarrito.splice(indice,1)
    
    // localStorage.setItem("carrito", JSON.stringify(convCarrito));


     //contProducto.innerHTML = ""

     //convCarrito.forEach(element => {
       
//         const {imagen , titulo, condition, precio ,talla, id} = element

     

  //   contProducto.innerHTML += `   
    // <div class="contenedorProducto">
     //<img class="imgProducto" src ="${imagen}" alt="imag">
     //<h4 class="producto">${titulo}</h4>
     
  //   <h5 class="estado">${condition}</h5>
  //   <h3 class="precio">${precio}</h3>
     
     
     
    // <button class="remover" id="${id}">Remove</button>
    // </div>`
     
    

    // })

     
 //s}})