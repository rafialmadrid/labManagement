var services = require('../services');    

module.exports = {
  
    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var tests = await services.Test.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: tests, message: "Succesfully Tests Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  create: async function (req, res) {
      // Validate request parameters, queries using express-validator
      
      try { 
        
          
          var tests = await services.Test.create(req.body.test);
          
          return res.status(200).json({ status: 200, data: tests, message: "Succesfully Test Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  update: async function (req, res) {
      
      try {

        var test = await services.Test.update(req.body);
        
        return res.status(200).json({status: 200, data: test, message: "Succesfully Test Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var test = await services.Test.remove(req.body.test);
        
        return res.status(200).json({status: 200, data: test, message: "Succesfully Test Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}