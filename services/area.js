var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
		

		create: async function (data) {
			
		    try {

		        var areas = await db.Area.create(data);
		        return areas;

		    } catch (e) {
		        // Log Errors
		        throw Error('Error while Paginating Area')
		    }	
		},




		/*findAll: async function (query, page, limit) {

	    try {

	        var areas = await db.Area.find(query)
	        return areas;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Areas')
	    }
	},*/
	

		find: async function (data) { 

			try {

				var area = await db.Area.find(data).populate('department');

				return area;

			} catch (e) {

				throw Error('Error while Paginating Area');

			}
		},



		update: async function (data){
				
			console.log(data)

			try {
				

				var area = await db.Area.findOneAndUpdate(data.filter, data.update);


				return area;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Area');
			}
		},



		remove: async function (data) {
			try {
				
				var area = await db.Area.findOneAndRemove({ _id: data._id });

				return area;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Area');
			}
		}


}


