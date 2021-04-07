var patient = require('./patient');    
var order = require("./order");
var test = require("./test");
var result = require("./result");
var testCatalogue = require("./testCatalogue")
var parameter = require("./parameter");

module.exports = {

	Patient: patient,
	Order: order,
	Test: test,
	Result: result,
	TestCatalogue: testCatalogue,
	Parameter: parameter

}