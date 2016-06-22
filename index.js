var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Route handler displays webpage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Create socket for emitting inputs
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//Listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});