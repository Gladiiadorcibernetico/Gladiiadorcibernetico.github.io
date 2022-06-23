import { getData } from "../modulo/getData.js";

const url = "http://localhost:4000/productos"




document.addEventListener('DOMContentLoaded', async()=>{
  try{
           const data = await getData(url)
           localStorage.setItem('productos', JSON.stringify(data));
  }catch (error){

console.log("error")
   }
} 
);

let shoes1 =  document.querySelector(".shoes");

shoes1.addEventListener("click",  ()=>{
    location.href = "shoes.html"
} )



let comercio =  document.querySelector("#comercio");

comercio.addEventListener("click",  ()=>{
    location.href = "buy.html"
} )

const get = localStorage.getItem("data");
const conv = JSON.parse(get);
///////////////////////////////////////////////

let despliegue = document.querySelector(".shoes");
despliegue.addEventListener('click', desplegado);

function desplegado(){
    location.href = "shoes.html"
}
////////////////////////
//let img2 = document.getElementById("#img2");
//img2.addEventListener("click" , ()=>{
    
//      location.href = "descripcion.html"
//})



