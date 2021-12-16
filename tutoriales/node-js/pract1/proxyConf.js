const net = require("net");

const LOCAL_PORT = 8000;
const LOCAL_IP = '127.0.0.1';
const REMOTE_PORT = Number(process.argv[2]);
const REMOTE_IP = process.argv[3];

const server = net.createServer(function(socket){
    const serviceSocket = new net.Socket();
    serviceSocket.connect(parseInt(REMOTE_PORT),
    REMOTE_IP, function(){
        socket.on("data", function(msg){
            serviceSocket.write(msg);
        });
        serviceSocket.on("data", function(data){
            socket.write(data)
        });
    });
}).listen(LOCAL_PORT, LOCAL_IP);

console.log("TCP serrver accepting connnection on port " + LOCAL_PORT);