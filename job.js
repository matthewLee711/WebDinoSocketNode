//Job Object
//Using a function
//Anonymous prototype - allocated during run time
// module.exports = function Job(url){
//   //private stuff
//   this.statusCode = statusCode;
//   this.firstByte = firstByte;
//   this.loadTime = loadTime;
//   this.url = url;

//   //
//   function run(){

//   }
  
//   function getParseXML(){

//   }
// };

//Anonymous prototype
var Job = function(url) {
  this.statusCode = 0;
  this.firstByte = 0;
  this.loadTime = 0;
  this.url = url;
};

Job.prototype.runJob = function(url) {
	//send test to webtest api
	//if url is invalid, cancel job
	console.log("job");
};

Job.prototype.getParseXML =  function() {
	console.log("parse");
	//check continually until web test is done

};

module.exports = Job;