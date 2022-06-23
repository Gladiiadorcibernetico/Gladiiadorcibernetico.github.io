
const get = localStorage.getItem("productos");
const conv = JSON.parse(get);

const getCarrito = localStorage.getItem("carrito")
const convCarrito = JSON.parse(getCarrito)
//document.addEventListener("dblclick", ({target})=>{
  //  console.log(target.length)

//}

//)




document.addEventListener('click', ({target}) => {

  if(target.classList.contains('agregarZapatos')){
      console.log("hecho")
   let id = target.id;
   //let idProducto = target.id;
   let producto = conv.find(item=> item.id == id);
   
   convCarrito.splice(0,0,producto)
   console.log(convCarrito)
   localStorage.setItem("carrito", JSON.stringify(convCarrito));
}})



let imgPrincipal = document.querySelector(".imagenproducto");
let contenedor = document.querySelector(".imgProducto");

imgPrincipal.setAttribute('src', conv[0].imagen);
imgPrincipal.setAttribute('alt', "p");
contenedor.appendChild(imgPrincipal);



let descripcion = document.querySelector(".titulo");
descripcion.innerText = `${conv[0].titulo}`;



let condicion = document.querySelector(".condicion");
condicion.innerText =  `${conv[0].condition}`;



let precio = document.querySelector(".precio");
precio.innerText =  `${conv[0].precio}`;


//let buy = document.querySelector("#btn2");

//buy.addEventListener('click' , adicionarCarrito)
//function adicionarCarrito(){

//localStorage.setItem("carrito", JSON.stringify(array2));
//location.href = "buy.html"
//}

















