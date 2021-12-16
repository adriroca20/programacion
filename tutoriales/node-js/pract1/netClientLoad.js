const net = require("net");

const client = net.connect(52870, function(){
    console.log("Cliente conectado");
    client.write("Hola mundo \n");
})

client.on("data", function(data){
    console.log(data.toString());
    client.end();
});

client.on("end", function(){
    console.log("Cliente desconectado")
});
