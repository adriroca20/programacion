const { resolve } = require("path");
const readline =  require("readline");

var numero;

const pantallaLeer= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const pregunta1 = ()=>{
    return new Promise((resolve,reject)=>{
        pantallaLeer.question("Inserta un numero ", (num)=>{
            numero=num;
            resolve();
          });
    })
}


const main = async() => {
    await pregunta1();
    convertirAOctal(numero);
    pantallaLeer.close();
}

main();

function convertirABinario(numero){
    let binario= parseInt(numero).toString(2);
    console.log(binario);
}

function convertirAOctal(numero){
    let octal= parseInt(numero).toString(8);
    console.log(octal);
}

function deLibrasAKilos(libras){
    var kilos= libras/2.20462;
    console.log(libras + " libras son " + kilos + " kilos");
}