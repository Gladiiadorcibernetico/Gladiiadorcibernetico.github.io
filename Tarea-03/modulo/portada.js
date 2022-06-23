export function mostrarlistado(data ,container){
data.forEach((element) => {
    const { titulo, imagen, id} = element 
    container.innerHTML += `
    <div class="shoes" >
    <img class="zapatos" src="${imagen}" alt="zapatos">
    <h3 class="titulo">${titulo}</h3>
    
    </div>
    <button imagen="${imagen}" id="${id}" class="agregarZapatos"> Add to Bag</button>
    `})};


  