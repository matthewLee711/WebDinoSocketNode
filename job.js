//Job Object

var request = require("request");
var cheerio = require("cheerio");


//Anonymous prototype - allocated during run time
var Job = function(url) {
  this.statusCode = 0;
  this.firstByte = 0;
  this.loadTime = 0;
  this.url = "http://www.webpagetest.org/runtest.php?url="
        + url
        + "&runs=1&f=xml&k=A.77d136a242db623122d15fab6a8bc2a7";
  this.xml = "";
};

Job.prototype.runJob = function() {
	//Retrieve webtest page itself
	request({
	  uri: this.url,
	}, function(error, response, body) {
	  var $ = cheerio.load(body);
	  $("xmlUrl").each(function() {
	    this.xml = $(this).text();
	    console.log("Retrieve xml: " + this.xml);
	    getParseXML.call();
	  });
	});
	//if url is invalid, cancel job
};

Job.prototype.getParseXML = function() {
	console.log("parse");
	//Check continually until web test is done
	//while loop to continually check -- xml
	while(this.statusCode != 200){
		request({
		  uri: this.xml,
		}, function(error, response, body) {
		  var $ = cheerio.load(body);
		  $("statusCode").each(function() {
		    this.statusCode = $(this).text();
		    console.log("statusCode: " + this.statusCode);
		  });
		  $("TTFB").each(function() {
		    this.firstByte = $(this).text();
		    console.log("ttfb: " + this.firstByte);
		  });
		});
		//pause for 5 seconds
		setTimeout(function() {
		    console.log('timeout');
		}, 5000);
	}

	//while loop to continually check -- json

};

module.exports = Job;