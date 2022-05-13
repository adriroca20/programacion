const { resolve } = require("path");
const readline =  require("readline");

var numero;
var digito;

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

const pregunta2 = ()=>{
    return new Promise((resolve,reject)=>{
        pantallaLeer.question("Inserta el digito ", (dig)=>{
            digito=dig;
            resolve();
        });        
    })
}

const main = async() => {
    await pregunta1();
    await pregunta2();
    esPalindromo(numero);
    pantallaLeer.close();
}


function encontrarDigitoEnPosicion(numero,digito){
    console.log(numero.charAt(digito-1));
}

function digitosDeUnNumero(numero){
    console.log(numero + " tiene  " +  numero.length + " digitos. \n");
}

function mayorDigito(numero){
    var digitoMayor = numero.charAt(0);
    for(let i = 1; i<numero.length; i++){
        if(numero.charAt(i)> digitoMayor){
            digitoMayor=numero.charAt(i);
        }
    }
    console.log("El mayor digito es: " + digitoMayor + "\n");
}

function segundoMayorDigito(numero){
    var digitoMayor = numero.charAt(0);
    var segundoDigitoMayor= numero.charAt(0);

    for(let i = 1; i<numero.length; i++){
        if(numero.charAt(i)< digitoMayor && numero.charAt(i)> segundoDigitoMayor){
            segundoDigitoMayor=numero.charAt(i);
        }
        if(numero.charAt(i)> digitoMayor){
            digitoMayor=numero.charAt(i);
        }
    }
    console.log("El segundo mayor digito es: " + segundoDigitoMayor + "\n");
}

function digitoMenor(numero){
    var menorDigito = numero.charAt(0);
    for(let i = 1; i<numero.length; i++){
        if(numero.charAt(i)< menorDigito){
            menorDigito=numero.charAt(i);
        }
    }
    console.log("El menor digito es: " + menorDigito + "\n");
}

function sumaTodosElementos(numero){
    var suma=0;
    var valor=numero;
    for(let i = 0; i<numero.length; i++){
       suma+= valor%10;
       valor=Math.floor( valor/10);
    }
    console.log("La suma es: " + suma + "\n");
}

function invertirDigitosNumero(num){
    var numeroGirado;
    for(let i = numero.length-1; i>=0; i--){
       numeroGirado+=num.charAt(i);
    }
    console.log("El numero girado es:  " + numeroGirado + "\n");
}

function esPalindromo(num){
    var palindromo= true;

    for(let i = numero.length-1; i>=0; i--){
        let x=0;
        if(num.charAt(i) != num.charAt(x)){
            palindromo=false;
            break;
        }
     }
     console.log("Es palindromo:  " + palindromo + "\n");
}
//Ejecuciones
main();