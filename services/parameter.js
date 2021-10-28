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
		try {
			console.log("parameter services update")
			console.log(data)
			if(data.update.valueTypes) data.update = {$push: data.update};
			console.log(data.update)
			var parameter = await db.Parameter.findOneAndUpdate(data.filter, data.update);
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


