var services = require('../services');    

module.exports = {
  
    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var orders = await services.Order.findAll({}, page, limit)

          return res.status(200).json({ status: 200, data: orders, message: "Succesfully Orders Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  create: async function (req, res) {
      // Validate request parameters, queries using express-validator
        console.log(req.body.order);
      try { 
          
          var orders = await services.Order.create(req.body.order)

          return res.status(200).json({ status: 200, data: orders, message: "Succesfully Order Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  update: async function (req, res) {
      
      try {

        var order = await services.Order.update(req.body);
        
        return res.status(200).json({status: 200, data: order, message: "Succesfully Order Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var order = await services.Order.remove(req.body.order);
        
        return res.status(200).json({status: 200, data: order, message: "Succesfully Order Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}