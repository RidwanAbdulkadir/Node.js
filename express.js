//express web framework
const express = require('express');
const app = express ();

app.get('/',(req,res)=>{
    res.send('"Hello world!"');
});

app.get('/sample',(req,res)=>{
    res.send('checking example route');
});

app.get('/sample/:name/:age',(req,res)=>{
    console.log(req.params);
    //res.send('sample with route params');
    res.send(req.params.name + ' : ' + req.params.age);
    
});

app.listen(3000)
