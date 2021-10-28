var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	

		create: async function (data) {
			
		    try {

		        var testCatalogues = await db.TestCatalogue.create(data);
		        return testCatalogues;

		    } catch (e) {
		        // Log Errors
		        throw Error('Error while Paginating TestCatalogue')
		    }	
		    
		},


		findAll: async function (query, page, limit) {

		    try {

		        var testCatalogues = await db.TestCatalogue.find(query)
		        return testCatalogues;

		    } catch (e) {
		        // Log Errors
		        throw Error('Error while Paginating TestCatalogues')
		    }

		},


		find: async function (data) { 

			try {

				var testCatalogue = await db.TestCatalogue.find(data);
				return testCatalogue;

			} catch (e) {

				throw Error('Error while Paginating TestCatalogue');

			}
		},

		


		update: async function (data){
				
		
			try {
				
				var id = data._id;
				var data = data.data;

				if (data.parameters) data = {$push: data};

				var testCatalogue = await db.TestCatalogue.findOneAndUpdate({_id: id}, data);


				return testCatalogue;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating TestCatalogue');
			}
		},



		remove: async function (data) {
			try {
				
				var testCatalogue = await db.TestCatalogue.findOneAndRemove({ _id: data._id });
				return testCatalogue;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating TestCatalogue');
			}
		}


}


