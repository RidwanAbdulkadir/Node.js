//creating http server using http module
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Hey there! I'm Ridwan, exploring the world of Node.js, one request at a time.");
        res.end();
    }
    else{
        res.write('You are not using the default domain');
        res.end
    }
});

server.listen('3000');
