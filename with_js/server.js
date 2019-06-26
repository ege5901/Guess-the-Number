var express = require('express')
var app = express()
var fs = require("fs")
var path = require('path');

app.use(express.static('public'));

fs.readFile('index.html', function(err, data) {
    html = data

  });


app.get('/GuessTheNumber', function (req, res) {
  res.sendFile(path.join(__dirname + '/only one html/GuessTheNumber.html'));
})
app.get('/', function (req, res) {
  res.send("hello ");
})

app.listen(80)
console.log("started");
