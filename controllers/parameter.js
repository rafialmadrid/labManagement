var services = require('../services');    

module.exports = {
  
    findParameters: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var parameters = await services.Parameter.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: parameters, message: "Succesfully Parameters Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  createParameter: async function (req, res) {
      // Validate request parameters, queries using express-validator
      
      try { 
        console.log(req.body.parameter)
          var parameters = await services.Parameter.create(req.body.parameter);
          
          return res.status(200).json({ status: 200, data: parameters, message: "Succesfully Parameter Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  updateParameter: async function (req, res) {
        
      try {

        var parameter = await services.Parameter.update(req.body);
        
        return res.status(200).json({status: 200, data: parameter, message: "Succesfully Parameter Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  removeParameter: async function (req, res) {
      try {

        var parameter = await services.Parameter.remove(req.body.parameter);
        
        return res.status(200).json({status: 200, data: parameter, message: "Succesfully Parameter Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}