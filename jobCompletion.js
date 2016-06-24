//Call back, promise, deferred

var Completion = function() {
	this.parseComplete = 100;
};

//Passes complete job into array.
Completion.prototype.parseComplete = function() {
	// var promise = new Promise(function(resolve, reject){
	// 	if(parseComplete == 200) {
	// 		//store into array
	// 		resolve("worked!");
	// 	}
	// 	else {
	// 		//return error
	// 		reject(Error("death"));
	// 	}
	// });
	
	
};

module.exports = Completion;