//loading http module -- import http 
var http = require('http');

//dispatcher
var dispatch = require('httpdispatcher');

//defining port to connect to
const PORT=8080;

//Function handles all requests and replies. 
function handleRequest(request, response){
	try{
	response.end('Works' + request.url);
	//Dispatch
	dispatcher.dispatch(request, response);
	} catch(err){
		console.log(err);
	}
}

//Create var to start server
var server = http.createServer(handleRequest);


server.listen(PORT, function(){
	console.log("Listening: http://localhost:%s", PORT);
});

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello Node.js\n');
// }).listen(8124,"127.0.0.1");

console.log('Server Running at http://127.0.0.1:8124/');