var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	
		findAll: async function (query, page, limit) {

	    try {

	        var tests = await db.Test.find(query)
	        return tests;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Tests')
	    }
	},

		findById: async function(data) {
			try {

				var test = await db.Test.findById(data._id);
				return test;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Test');
			}
		},

		update: async function (data){


			try {
				
				var id = data._id;
				
				var data = data.data;

				if (data.results) data = {$push: data};
				
			
				var test = await db.Test.findOneAndUpdate({_id: id}, data);
				return test;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Test');
			}
		},

		create: async function (data) {
			
	    try {

	    	var tests = await db.Test.create(data);
	        return tests;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Test')
	    }	
	},

		remove: async function (data) {
			try {
				
				var test = await db.Test.findOneAndRemove({ _id: data._id });
				return test;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Test');
			}
		}


}


