var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Instantiate jobMaster class
JobMaster = require('./jobMaster.js');
var master = new JobMaster();

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

//Create socket for recieving inputs
//Retrieve parameters + url input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
io.on('connection', function(socket){
  socket.on('parameters', function(input){
    //store job in hashmap
    master.addJob(input);

    //run job
    master.runJob(input);

    //check and display array

    //output the result
    //io.emit('parameters', input);
  });
});

//Listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});