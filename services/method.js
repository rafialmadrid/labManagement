var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
		

		create: async function (data) {
			
		    try {

		        var methods = await db.Method.create(data);
		        return methods;

		    } catch (e) {
		        // Log Errors
		        throw Error('Error while Paginating Method')
		    }	
		},




		/*findAll: async function (query, page, limit) {

	    try {

	        var methods = await db.Method.find(query)
	        return methods;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Methods')
	    }
	},*/
	

		find: async function (data) { 

			try {

				var method = await db.Method.find(data);
				return method;

			} catch (e) {

				throw Error('Error while Paginating Method');

			}
		},



		update: async function (data){
				

			try {
				
				id = data._id;
				data = data.data;

				var method = await db.Method.findOneAndUpdate({_id: id}, data);


				return method;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Method');
			}
		},



		remove: async function (data) {
			try {
				
				var method = await db.Method.findOneAndRemove({ _id: data._id });
				return method;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Method');
			}
		}


}


