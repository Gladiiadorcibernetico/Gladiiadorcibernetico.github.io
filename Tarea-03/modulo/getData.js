export const getData = async url => {
    try{
        //solicitud
        const resp = await fetch ( url );
        //conversion en json
        const data = await resp.json()
        return data 
    } catch (err){
        throw err
    }
}