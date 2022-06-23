const url = "http://localhost:4000/carrito"

export const postC = async u => {
    try{
            await fetch(url , {
            method:"POST",
            body:  JSON.stringify(u),
            headers: { "Content-Type" : "application/json; charset=UTF-8"},

        } )

    }catch (err){
            console.log("error")
    }
}

//export const deleteP = async url =>{
  //  console.log(url)
//}