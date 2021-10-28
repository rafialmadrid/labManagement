var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
		

		create: async function (data) {
			
		    try {

		        var departments = await db.Department.create(data);
		        return departments;

		    } catch (e) {
		        // Log Errors
		        throw Error('Error while Paginating Department')
		    }	
		},


	

		find: async function (data) { 

			try {

				var department = await db.Department.find(data);
				return department;

			} catch (e) {

				throw Error('Error while Paginating Department');

			}

		},


		update: async function (data){
				
			console.log(data);

			try {
			

				var department = await db.Department.findOneAndUpdate(data.filter, data.update);


				return department;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating Department');
			}
		},



		remove: async function (data) {
			try {
				
				var department = await db.Department.findOneAndRemove({ _id: data._id });
				return department;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating Department');
			}
		}


}


