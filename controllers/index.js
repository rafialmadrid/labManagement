
var area = require("./area");
var department = require("./department");

var testCatalogue = require("./testCatalogue");

var method = require("./method");
var indication = require("./indication");

var parameter = require("./parameter");
var valueType = require("./valueType");


var patient = require("./patient");
var order = require("./order");
var test = require("./test");
var result = require("./result");
var controller = require("./controller");

module.exports = {
	
	Area: area,
	Department: department,
	
	TestCatalogue: testCatalogue,
	Parameter: parameter,
	valueType: valueType,

	Method: method,
	Indication: indication,

	Patient: patient,
	Order: order,
	Test: test,
	Result: result,
	Controller: controller

} 