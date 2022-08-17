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
    factorial(5);
    pantallaLeer.close();
}

main();

function exponencial(base,exponente){
    var resultado=1;
    for(let i=exponente;i>0;i--){
        resultado*=base;
    }
    console.log(resultado);
}

function factorial(numero){
    var result=1;
    for (let i = 1; i <= numero; i++) {
        result*=i;
    }
    console.log(result);
}