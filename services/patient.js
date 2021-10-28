var mongoose = require("mongoose");
var db = require('../models');

module.exports = {
	
		findAll: async function (query, page, limit) {

	    try {

	        var patients = await db.Patient.find(query)
	        return patients;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Patients')
	    }
	},


		findById: async function(data) {
			try {
				
				var patient = await db.Patient.findById(data._id)
				.populate({
					path: "orders",
					populate: {
						path: "tests",
						populate: {
							path: "results",
							populate: {
								path: "parameter"
							}
						}
					}
				});
				return patient;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Patient');
			}
		},

		find: async function (data) { 

			try {

				var patient = await db.Patient.find(data);
				return patient;

			} catch (e) {

				throw Error('Error while Paginating Patient');

			}
		},

		update: async function (data) {
		
			try {
				
				id = data._id;
				data = data.data;


				if(data.orders) data = {$push: data};
				


				var patient = await db.Patient.findOneAndUpdate({_id: id}, data);


				return patient;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Patient');
			}
		},


		create: async function (data) {
			
	    try {
	    	
	        var patients = await db.Patient.create(data);
	        return patients;

	    } catch (e) {
	        // Log Errors
	        throw Error('Error while Paginating Patient')
	    }	
	},

		remove: async function (data) {
			try {
				
				var patient = await db.Patient.findOneAndRemove({ _id: data._id });
				return patient;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Patient');
			}
		}


}


