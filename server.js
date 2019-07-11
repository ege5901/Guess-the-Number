var express = require('express')
var app = express()
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var fs = require("fs")
var path = require('path');
var port = process.env.PORT || 80



app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on("data1",function(data){
    console.log(data);
    score = data;
     
    fs.appendFile('scores.txt', score, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    
  });
});

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

http.listen(port)
console.log("started");
