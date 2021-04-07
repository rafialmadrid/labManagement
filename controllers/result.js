var services = require('../services');    

module.exports = {
  
    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var results = await services.Result.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: results, message: "Succesfully Results Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  create: async function (req, res) {
      // Validate request parameters, queries using express-validator
      try { 
        
          console.log(req.body.result);
          var results = await services.Result.create(req.body.result);
          
          return res.status(200).json({ status: 200, data: results, message: "Succesfully Result Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  update: async function (req, res) {
      
      try {

        var result = await services.Result.update(req.body);
        
        return res.status(200).json({status: 200, data: result, message: "Succesfully Result Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var result = await services.Result.remove(req.body.result);
        
        return res.status(200).json({status: 200, data: result, message: "Succesfully Result Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}