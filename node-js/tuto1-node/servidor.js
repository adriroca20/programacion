const http= require("http");

const handleServer=function(req,res){
    res.writeHead(200 , {"Content-type" : "text/html"});
    res.write("<h1> Hola mundo desde NodeJS</h1>");
    res.end();
}

http.createServer(handleServer).listen(3000);