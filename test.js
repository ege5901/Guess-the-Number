var fs = require("fs")
var path = require('path');


fs.readFile('scores.txt',"utf-8",function (err, data) {
    if (err) throw err;

console.log(data);

array1 = data.split(",")
var scorearr = [];

for (var i = 0; i < array1.length-1; i++) {
    array2 = [];
    console.log(array1[i]);
    array2 = array1[i].split(":");
    scorearr.push(array2)

}

console.log(scorearr);

});


