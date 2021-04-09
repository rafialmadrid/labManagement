var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	
		findAll: async function (query, page, limit) {

	    try {

	        var orders = await db.Order.find(query)
	        .populate({
	        	path: "tests",
	        	populate: {
	        		path: "testCatalogueId"
	        	}
	        })
	        return orders;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Orders')
	    }
	},

		findById: async function(data) {
			try {

				var order = await db.Order.findById(data._id)
				.populate([
				{

					path: "tests",

					populate: {

						path: "results",

							populate: {
								path: "parameter"
							}

					}
				},
				{
					path: "tests",

					populate: {

						path: "testCatalogueId"

					}
				}
				]);
				return order;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Order');
			}
		},

		update: async function (data){
				
			try {
				
				var id = data._id;
				var data = data.data;

				if (data.tests) data = {$push: data};
				

				var patient = await db.Order.findOneAndUpdate({_id: id}, data);
				return patient;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Order');
			}
		},

		create: async function (data) {
			

	    try {

	        var orders = await db.Order.create(data);
	        return orders;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Order')
	    }	
	},

		remove: async function (data) {
			try {
				
				var patient = await db.Order.findOneAndRemove({ _id: data._id });
				return patient;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Order');
			}
		}


}


