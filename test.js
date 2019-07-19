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


var scores = [];

for (var i = 0; i < scorearr.length; i++) {
    scores.push(scorearr[i][1]);
}

console.log(scores);

scores.sort();


console.log(scores);

});


