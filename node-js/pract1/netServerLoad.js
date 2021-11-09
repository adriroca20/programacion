const fs= require("fs");
const net= require("net");

const server= net.createServer(function(c){
    console.log("Server: cliente conectado");
    c.on("end", function(){
        console.log("server: cliente desconectado")
    });

    c.on("data", function(data){
        c.write(getLoad().toString());
        c.end();
    });
});

server.listen(52870, function(){
    console.log("Server lanzado")
});

function getLoad(){
    data=fs.readFileSync("/proc/loadavg");
    var tokens= data.toString().split('');
    var min1= parseFloat(tokens[0]) + 0.01;
    var min5 = parseFloat(tokens[1])+0.01;
    var min15 = parseFloat(tokens[2])+0.01;
    return min1*10+min5*2+min15;
};