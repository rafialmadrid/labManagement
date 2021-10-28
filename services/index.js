var area = require("./area");
var department = require("./department");

var testCatalogue = require("./testCatalogue")
var parameter = require("./parameter");

var valueType = require("./valueType");

var method = require("./method");
var indication = require("./indication");

var patient = require('./patient');    
var order = require("./order");
var test = require("./test");
var result = require("./result");

module.exports = {

	Area: area,
	Department: department,

	TestCatalogue: testCatalogue,
	Parameter: parameter,

	ValueType: valueType,

	Method: method,
	Indication: indication,

	Patient: patient,
	Order: order,
	Test: test,
	Result: result,

}