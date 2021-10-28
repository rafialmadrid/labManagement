var mongoose = require("mongoose");
var db = require('../models')

module.exports = {
	create: async function (data) {		
    try {
        var valueTypes = await db.ValueType.create(data);
        return valueTypes;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating ValueType')
    }	
	},


	find: async function (data) { 

			try {

				var valueType = await db.ValueType.find(data);

				return valueType;

			} catch (e) {

				throw Error('Error while Paginating ValueType');

			}
		},




		update: async function (data){
				

			try {
				
				id = data._id;
				data = data.data;

				var valueType = await db.ValueType.findOneAndUpdate({_id: id}, data);


				return valueType;

			} catch (e) {
				//Log Errors
				throw Error('Error while Paginating ValueType');
			}
		},



		remove: async function (data) {
			try {
				
				var valueType = await db.ValueType.findOneAndRemove({ _id: data._id });
				return valueType;

			} catch (e) {
				//log Errors
				throw Error('Error while Paginating ValueType');
			}
		}


}


