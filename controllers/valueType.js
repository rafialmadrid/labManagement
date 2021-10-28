  var services = require('../services');    

  

module.exports = {
  

  create: async function (req, res) {
      // Validate request valueTpyes, queries using express-validator
      try { 
        var valueTypes = await services.ValueType.create(req.body.valueTypes);
        return res.status(200).json({ status: 200, data: valueTypes, message: "Succesfully ValueType Created" });
      } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
      }
  },


  find: async function (req, res, next) {
    console.log(req.query)
      try {
      var query = {}  
        if(req.query.code) query.code = new RegExp(req.query.code, 'i');
        if(req.query.name) query.name = new RegExp( req.query.name, 'i');
        if(req.query._id) query._id = req.query._id;
      var valueType = await services.ValueType.find(query);
      return res.status(200).json({ status: 200, data: valueType, message: "Successfully ValueType Retrieved"})
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  },


  update: async function (req, res) {        
      try {
        var valueType = await services.ValueType.update(req.body);
        return res.status(200).json({status: 200, data: valueType, message: "Succesfully ValueType Updated"})
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var valueTpye = await services.ValueType.remove(req.body.valueTpye);
        
        return res.status(200).json({status: 200, data: valueTpye, message: "Succesfully ValueType Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}