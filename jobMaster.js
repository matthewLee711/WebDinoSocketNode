//Call job class
require('./job.js');

//Create hashmap
var HashMap = require('hashmap');
var jobMaster = new HashMap();

//jobMaster to run job objects
//named prototype - created during parse time -easier to debug
module.exports = function JobMaster(){
  function addJob(name) {
  	console.log("yay");
  	//Instantiate a new job object
  	var job = new Job(name);
  	//Store new job in hashmap
    jobMaster.set(name, job);
  }
  function removeJob (name) {
    jobMaster.remove(name);
  }
  function runJob (name){
  	//Get specific job to run
  	job = jobMaster.get(name);

  	if(job != null) {
  		return job.run();
  	}
  }
};



