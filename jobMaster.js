//Call job class
Job = require('./job.js');


//Create hashmap
var HashMap = require('hashmap');
var jobMaster = new HashMap();

//jobMaster to run job objects
//Named Object - created during parse time -easier to debug
var JobMaster = function() {};

JobMaster.prototype.addJob = function(name) {
	console.log("yay");
	console.log(name);
  	//Instantiate a new job object and pass url
  	var job = new Job(name);
  	//Store new job in hashmap
    jobMaster.set(name, job);
};

JobMaster.prototype.runJob = function(name) {
	//Get specific job to run
  	job = jobMaster.get(name);

  	if(job != null) {
  		console.log("job running");
  		//return job.run();
  	}
};

JobMaster.prototype.removeJob = function(name) {
	jobMaster.remove(name);
};

//exports.JobMaster = JobMaster();
module.exports = JobMaster;

