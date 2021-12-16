function add (x1, x2){
    return x1+x2;
}

function substract(x1, x2){
    return x1-x2;
}

function multiply(x1, x2){
    return x1*x2;
}


exports.add = add;
exports.substract= substract;
exports.multiply=multiply;

//Tambien puedes crear un objeto con 

const Math={}; //Con esto creas el objeto Math. Puede llamarse como quieras,no tiene que ser el nombre de la clase

Math.add=add;
Math.substract=substract;
Math.multiply=multiply;

module.exports=Math; //Asi no tienes que ir exportando de uno en uno, sino que esportas un modulo con todos los metodos que quieras.