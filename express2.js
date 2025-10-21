//express web framework
const express = require('express');
const path = require('path');
const app = express ();
app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','sample.txt'));
});

app.get('/sample',(req,res)=>{
    res.send('checking example route');
});

app.get('/sample/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query)
    //res.send('sample with route params');
    res.send(req.params.name + ' : ' + req.params.age);
    
});

app.listen(3000)

