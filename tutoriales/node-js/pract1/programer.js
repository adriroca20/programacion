const net = require("net");

var msg= JSON.stringify({
    "ip": process.argv[4],
    "port": process.argv[5]
});

var socket= net.connect(process.argv[2], process.argv[3],function(){
    socket.write(msg);
    socket.end();
}
);