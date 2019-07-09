var express = require('express')
var app = express()
var fs = require("fs")
var path = require('path');
var port = process.env.PORT || 80

app.use(express.static('public'));

fs.readFile('index.html', function(err, data) {
    html = data

  });

app.get('/text.js', function (req, res) {
  
  res.sendFile(path.join(__dirname + '/text.js'));
    
  
})

app.get('/GuessTheNumber', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

  

})
app.get('/', function (req, res) {
  res.send("hello ");
})

app.listen(port)
console.log("started");
