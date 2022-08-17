const gatos = require ("miau-api");

const a=1;

module.exports=function() {
    console.log('Hello World!');
}

 module.exports= async function getGato(){
    let img = await gatos.gato()

    console.log(await img)
}

getGato();