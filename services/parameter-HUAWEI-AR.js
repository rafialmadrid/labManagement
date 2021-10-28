var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	create: async function (data) {
	try {
	   var parameters = await db.Parameter.create(data);
	    return parameters;
	} catch (e) {
	    // Log Errors
	    throw Error('Error while Paginating Parameter')
	}	
},

	find: async function (data) { 
		try {
			var parameter = await db.Parameter.find(data)
			.populate({
				path:"valueTypes",
			});
			return parameter;
		} catch (e) {
			throw Error('Error while Paginating Parameter');
		}
	},

	update: async function (data){
		/*console.log(data)
		console.log(data.update.data)*/
		try {

			if(data.update.data){
				var name = data.update.data.name;
				var	code = data.update.data.code;
				var area = data.update.data.area;
			}
			if(data.update.valueTypes){
				var valueType = data.update.valueTypes;
			}
			
			var query = {}
			if(name) query.name = name;
			if(code) query.code = code;
			if(area) query.area = area;
			if(valueType) query.$push = {valueTypes:valueType}
/*				console.log("#asdas")
				console.log(query)*/
			var parameter = await db.Parameter.findOneAndUpdate(
				data.filter, 
				query
				);
			return parameter;

		} catch (e) {
			//Log Errors
			throw Error('Error while Paginating Parameter');
		}
	},



		remove: async function (data) {
			try {
				
				var parameter = await db.Parameter.findOneAndRemove({ _id: data._id });
				return parameter;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Parameter');
			}
		}


}


