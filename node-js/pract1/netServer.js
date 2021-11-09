const net= require("net");

const server= net.createServer(function(c){
    console.log("Server: cliente conectado");
    c.on("end", function(){
        console.log("server: cliente desconectado")
    });

    c.on("data", function(data){
        c.write("Hola! " + data.toString());
         c.end();
    });
});

server.listen(52870, function(){
    console.log("Server lanzado")
});