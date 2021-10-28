var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
		

		create: async function (data) {
			
		    try {

		        var indications = await db.Indication.create(data);
		        return indications;

		    } catch (e) {
		        // Log Errors
		        throw Error('Error while Paginating Indication')
		    }	
		},




		/*findAll: async function (query, page, limit) {

	    try {

	        var indications = await db.Indication.find(query)
	        return indications;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Indications')
	    }
	},*/
	

		find: async function (data) { 

			try {

				var indication = await db.Indication.find(data);
				return indication;

			} catch (e) {

				throw Error('Error while Paginating Indication');

			}
		},



		update: async function (data){
				

			try {
				
				id = data._id;
				data = data.data;

				var indication = await db.Indication.findOneAndUpdate({_id: id}, data);


				return indication;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Indication');
			}
		},



		remove: async function (data) {
			try {
				
				var indication = await db.Indication.findOneAndRemove({ _id: data._id });
				return indication;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Indication');
			}
		}


}


