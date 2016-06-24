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
	//Need to reference to scope and context outside of inner function
	var _this = this;
	//Retrieve webtest page itself
	request({
	  uri: this.url,
	}, function(error, response, body) {
	  var $ = cheerio.load(body);
	  $("xmlUrl").each(function() {
	    _this.xml = $(this).text();
	    console.log("Retrieve xml: " + _this.xml);
	    _this.getParseXML();
	  });
	});
	//if url is invalid, cancel job
};

Job.prototype.getParseXML = function() {
	console.log("Enter parseXML function");
	//Need to reference to scope and context outside of inner function
	var _this = this;
	//Check continually until web test is done
	//Recursion to continually check xml and extract content
	//if(_this.statusCode != 200) {
	request({
	  uri: _this.xml,
	}, function(error, response, body) {
	  var $ = cheerio.load(body);
	  console.log("entered xml parser");
	  $("statusCode").each(function() {
	    _this.statusCode = $(this).text();
	    console.log("statusCode: " + _this.statusCode);
	  });
	  //Retrieve ttfb and loadtime
	  if(_this.statusCode == 200){
	  	$("TTFB").each(function() {
	  	  _this.firstByte = $(this).text();
	  	  console.log("ttfb: " + _this.firstByte);
	  	});
	  }
	});
	//while loop to continually check -- json

};

module.exports = Job;