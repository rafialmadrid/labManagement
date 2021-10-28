var services = require('../services'); 
var controllers = require("../controllers");   


module.exports = {
  create: async function (req, res) {  
      try { 
        var parameters = await services.Parameter.create(req.body.parameter);
        
        
        if(req.body.valueTypes){
          var valueTypes = await services.ValueType.create(req.body.valueTypes);

          var filter={}
          var update={}
          filter._id = parameters._id;
          update.valueTypes = valueTypes.map(valueType=>{
            return valueType._id
          });
          var parameter = await services.Parameter.update({filter,update});
        }
        return res.status(200).json({ status: 200, data: parameter, message: "Succesfully Parameter Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },

  find: async function (req, res, next) {
      try {
      var query = {}  
        if(req.query.code) query.code = new RegExp(req.query.code, 'i');
        if(req.query.name) query.name = new RegExp( req.query.name, 'i');
        if(req.query._id) query._id = req.query._id;
      var parameter = await services.Parameter.find(query);
      return res.status(200).json({ status: 200, data: parameter, message: "Successfully Parameter Retrieved"})
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  },

  update: async function (req, res) {        
      try {

        var filter = {}
        var update = {data:{}}
        if(req.query._id) filter._id = req.query._id;
        if(req.query.code) update.data.code = req.query.code;
        if(req.query.name) update.data.name = req.query.name;
        if(req.query.area) update.data.area = req.query.area; 

          var current = JSON.parse(req.query.current);

        if(current.length > 0){
          var valueTypes = await services.ValueType.create(current);
          update.valueTypes = valueTypes.map(valueType=>{
            return valueType._id
          });
        }
/*        if(req.query.previous){
          var previous = JSON.parse(req.query.previous);
          console.log(previous);
        }*/
        var parameter = await services.Parameter.update({filter,update});
        return res.status(200).json({status: 200, data: parameter, message: "Succesfully Parameter Updated"})
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var parameter = await services.Parameter.remove(req.body.parameter);
        
        return res.status(200).json({status: 200, data: parameter, message: "Succesfully Parameter Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}