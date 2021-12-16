const os= require("os"); //Es como importar el stdio.h o cosas asi basicas que vienen incluidas en el interprete
const fs= require("fs");//Trae el modulo file system

console.log(os.platform()); //Devuelve tu sistema operativo
console.log("Memoria libre" , os.freemem()/1000000 , "MB");

fs.writeFile("./texto.txt" , "Aqui es donde va el contenido del texto", function(err){ //El ultimo parametro function se le llama CallBack
    if(err){
        console.log(err);
    }
    else{
        console.log("Todo correcto");
    }
});

// const users= query("SELECT * FROM users");

// query("SELECT *FROM users" , function(err, users){
//     if(err){
//         //Haces lo que sea cuando es un error
//     }
//     else if(users){
//         //Haces lo que sea si recibes los usuarios
//     }
// });

fs.readFile("./texto.txt", function(err, data){
    if(err){
        console.log(err);
    }
    else if(data){
        console.log(data.toString());
    }
});
