const express = require("express");
const server= express();

server.get("/", function(req, res){
    res.send("<h1>Hola mundo </h1>");
    res.end();
});

server.listen(3000, function(){
    console.log("Server on port 3000");
});