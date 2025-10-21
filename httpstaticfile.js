//serving static files with http and file system module
const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const  readStream = fs.createReadStream('./static/sample.txt');
    res.writeHead(200,{'content-type': 'text'});
    readStream.pipe(res);
}).listen(2500);

