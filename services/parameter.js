var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	
		findAll: async function (query, page, limit) {

	    try {

	        var parameters = await db.Parameter.find(query)
	        return parameters;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Parameters')
	    }
	},

		findById: async function(data) {
			try {

				var parameter = await db.Parameter.findById(data._id)
				.populate({
					path: "orders",
					populate: {
						path: "tests"
					}
				});
				return parameter;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Parameter');
			}
		},

		update: async function (data){
				

			try {
				
				id = data._id;
				data = data.data;

				var parameter = await db.Parameter.findOneAndUpdate({_id: id}, data);


				return parameter;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Parameter');
			}
		},


		create: async function (data) {
			
	    try {

	        var parameters = await db.Parameter.create(data);
	        return parameters;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Parameter')
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


