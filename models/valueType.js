const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const valueTypeSchema = new Schema({

  numeric: {
  	min: Number,
  	max: Number,
  },

  numericWSex: {
  	male: {
  		min: Number,
  		max: Number,
  	},
  	female: {
  		min: Number,
  		max: Number,
  	}
  },

  numericWAge: {

      age: {
      	min: Number,
      	max: Number,
      },

  		range: {
  			min: Number,
  			max: Number,
  		}
  },

  numericWAgeSex: {
  	male: {

    		age: {
    			min: Number,
    			max: Number,
    		},

  			range: {
  			min: Number,
  			max: Number,
  			}

  	},

  	female: {

    		age: {
    			min: Number,
    			max: Number,
    		},
				range: {
					min: Number,
					max: Number,
				}
  	}
  },

  multipleChoice: {
  	text: String,
  },

});

const ValueType = mongoose.model("ValueType", valueTypeSchema);

module.exports = ValueType;
