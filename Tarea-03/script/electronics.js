
const get = localStorage.getItem("productos");
const conv = JSON.parse(get);


let contenedor = document.querySelector(".imagenes")



document.addEventListener('DOMContentLoaded', ()=> {

conv.forEach((value) => {
    const { titulo, imagen, id} = value 
    console.log(id)
    contenedor.innerHTML += `
    <div class="electronics" >
    <img class="electronicos" src="${imagen}" alt="electrodomestico">
    <h3 class="titulo">${titulo}</h3>
    
    </div>
    <button onclick="alerta(${id});" id="btn2"class="agreg"> Add to Bag</button>
    `})
});

