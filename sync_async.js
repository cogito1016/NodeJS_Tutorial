//hadnling
var fs = require('fs');

//Sync
console.log(1);
//readFile method using encoding parameter
var data =  fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//Async
console.log(2)
//익명함수가 들어감(3번째 파라미터)
fs.readFile('data.txt',{encoding:'utf8'}, function(err,data){
    console.log(data);
});

