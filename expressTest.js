//This is main application Or Entry application

//load express package ! to express variation.
var express = require('express');

//return application using call 'express' method
var app = express();

//listen 3000port & if connected, print 'Connected 3000 port'
app.listen(3000,function (){
    console.log("Connected 3000 port");
});


