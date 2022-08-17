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

    // var PA= [1,3,5,7,9,11,13,15,17];
    // encontrarNumeroEnListaOrdenada(13,0,PA.length-1,PA);

    primosMenores(200);
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
    let x=numero.length-1;
    for(let i = 0; i<numero.length/2-1; i++){
        console.log(num.charAt(i) + " " + num.charAt(x) + " x: " + x);
        if(num.charAt(i) != num.charAt(x)){
            palindromo=false;
            break;
        }
        x--;
     }
     console.log("Es palindromo:  " + palindromo + "\n");
}

function sumaNNumeros(num){
    var suma=0;
    for(let i=1;i<=num;i++){
        suma+=i;
    }
    console.log("La suma total es:  " + suma + "\n");
}

function checkIfSquare(num){
    let esRaizPerfecta=false;
    let raiz = Math.sqrt(num);
    let sinDecimales = Math.floor(raiz);
    if(raiz==sinDecimales){
        esRaizPerfecta=true;
    }
    console.log("Es raiz perfecta:  " + esRaizPerfecta + "\n");
}

//Encuentra un numero en una lista ordenada mediante busqueda binaria.
function encontrarNumeroEnListaOrdenada(num,minimo,maximo,PA){
    var medio= Math.floor(minimo+(maximo-minimo)/2);
    if(num==PA[medio]){
        console.log("Encontrado en la posicion: " + medio);
    }
    if(num<PA[medio]){
        encontrarNumeroEnPA(num,minimo,medio-1,PA);
    }
    if(num>PA[medio]){
        encontrarNumeroEnPA(num,medio+1,maximo,PA);
    }
}

function fibonacci(elementos){
    var primero=1;
    var segundo=1;
    var siguiente;

    console.log(primero);
    console.log(segundo);
    for(let i=0;i<elementos;i++){
        siguiente=primero+segundo;
        primero=segundo;
        segundo=siguiente;
        console.log(siguiente);
    }
}

function checkDivisivility(numero,div){
    if(numero%div==0){
        console.log(numero + " es divisible por " + div);
    }
    else{
        console.log(numero + " no es divisible por " + div);
    }
}

function esNumeroPrimo(numero){
    let raiz= Math.sqrt(numero);
    var esPrimo=true;
    for(let i=2;i<=raiz;i++){
        if(numero%i ==0){
            esPrimo=false;
            break;
        }
    }
    //console.log("El numero es primo? " + esPrimo);
    return esPrimo;
}

function primosMenores(numero){
    for(let i=numero;i>0;i--){
        if(esNumeroPrimo(i)){
            console.log(i);
        }
    }
}

//Ejecuciones
main();