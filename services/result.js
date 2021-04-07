var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	
		findAll: async function (query, page, limit) {

	    try {

	        var results = await db.Result.find(query)
	        return results;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Results')
	    }
	},

		findById: async function(data) {
			try {

				var result = await db.Result.findById(data._id);
				return result;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Result');
			}
		},

		update: async function (data){
			try {
				
				var id = data._id;
				
				var data = data.data;
				
				var result = await db.Result.findOneAndUpdate({_id: id}, data);
				return result;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Result');
			}
		},

		create: async function (data) {
			
	    try {

	    	var results = await db.Result.create(data);
	        return results;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Result')
	    }	
	},

		remove: async function (data) {
			try {
				
				var result = await db.Result.findOneAndRemove({ _id: data._id });
				return result;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Result');
			}
		}


}


