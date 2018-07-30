//This is main application Or Entry application

//load express package ! to express variation.
var express = require('express');

//return application using call 'express' method
var app = express();

//Add this sentence 'use method'
app.use(express.static('public'));

//If user connect home, run function(req,res)...
app.get('/',function(req,res){
    res.send('hello home page');
});


app.get('/login',function(req,res){
    res.send('Login please');
});

//listen 3000port & if connected, print 'Connected 3000 port'
app.listen(3000,function (){
    console.log("Connected 3000 port");
});


