//hadnling
var fs = require('fs');

//Sync
console.log(1);
//readFile method using encoding parameter
var data =  fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//Async
//(1)
console.log(2)
//(2)
fs.readFile('data.txt',{encoding:'utf8'}, function(err,data){
    //(4)
    console.log(3);
    console.log(data);
});
//(3)
console.log(4);
