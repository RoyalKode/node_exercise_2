var express = require('express');
var app = express();

app.use(express.static('public'));

function rnGreeting() {
  var arr = ["hei", "hello", "halla"];
  var greeting = arr[Math.round(Math.random() * 3)];

  return greeting;
}

app.get('/greeting/:name', function(req, res) {
  res.send(rnGreeting() + " " + req.params.name)
})

app.listen(8080, function(){
  console.log('Server Started on Port 8080...');
})
