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

				console.log("service")
				console.log(data)

            	console.log("map")
        		data.asyncForEach(async (value)=>{
        		var query={}
        		if(value.numeric){
        			query.numeric = {}
        			query.numeric.min = value.numeric.min
        			query.numeric.max = value.numeric.max
        		}
        		if(value.numericWAge){
        			query.numericWAge = {}
        			query.numericWAge.age = {}
        			query.numericWAge.range = {}
        			query.numericWAge.age.min = value.numericWAge.age.min
        			query.numericWAge.age.max = value.numericWAge.age.max
        			query.numericWAge.range.min = value.numericWAge.range.min
        			query.numericWAge.range.max = value.numericWAge.range.max
        			/*{numericWAge:{age:{min:value.numericWAge.age.min, max:value.numericWAge.age.max}, range:{min:value.numericWAge.range.min, max:value.numericWAge.range.max} }}*/
        		}
        		if(value.numericWSex){
        			query.numericWSex = {}
        			query.numericWSex.male = {}
        			query.numericWSex.female = {}
        			query.numericWSex.male.min = value.numericWSex.male.min
        			query.numericWSex.male.max = value.numericWSex.male.max
        			query.numericWSex.female.min = value.numericWSex.female.min
        			query.numericWSex.female.max = value.numericWSex.female.max
        		}

        		if(value.numericWAgeSex){
        			query.numericWAgeSex = {}
        			query.numericWAgeSex.male = {}
        			query.numericWAgeSex.female = {}
        			query.numericWAgeSex.male.age = {}
        			query.numericWAgeSex.male.range = {}
        			query.numericWAgeSex.female.age = {}
        			query.numericWAgeSex.female.range = {}

        			query.numericWAgeSex.male.range.min = value.numericWAgeSex.male.range.min
        			query.numericWAgeSex.male.range.max = value.numericWAgeSex.male.range.max
        			query.numericWAgeSex.male.age.min = value.numericWAgeSex.male.age.min
        			query.numericWAgeSex.male.age.max = value.numericWAgeSex.male.age.min

        			query.numericWAgeSex.female.range.min = value.numericWAgeSex.female.range.min
        			query.numericWAgeSex.female.range.max = value.numericWAgeSex.female.range.max
        			query.numericWAgeSex.female.age.min = value.numericWAgeSex.female.age.min
        			query.numericWAgeSex.female.age.max = value.numericWAgeSex.female.age.max
        		}
        		if(value.multipleChoice){
        			query.multipleChoice = {}
        			query.multipleChoice.text = value.multipleChoice.text
        		}

				var valueType = await db.ValueType.findOneAndUpdate({_id: value._id}, query);
				
				return valueType

            	})

            	


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


