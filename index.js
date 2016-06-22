var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Instantiate jobMaster class
require('./jobMaster.js');
var jobMaster = new JobMaster();

//Route handler displays webpage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Create socket for recieving inputs
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

//Retrieve parameters + url input
io.on('connection', function(socket){
  socket.on('parameters', function(input){
    //store job in hashmap
    addjob(input);

    //output the result
    //io.emit('parameters', input);
  });
});

//Listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});