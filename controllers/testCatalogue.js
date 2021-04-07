var services = require('../services');    

module.exports = {
  
    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var testCatalogues = await services.TestCatalogue.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: testCatalogues, message: "Succesfully TestCatalogues Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  findByCode: async function (req, res, next) {
    try {
      console.log(req.params.code)
      var testCatalogues = await services.TestCatalogue.findByCode(req.params.code)

      return res.status(200).json({ status: 200, data: testCatalogues, message: "Succesfully TestCatalogue Retrieved"});

    } catch (e) {

      return res.status(400).json({ status:400, message: e.message });

    }
  },


  create: async function (req, res) {
      // Validate request parameters, queries using express-validator
      
      try { 

          var testCatalogues = await services.TestCatalogue.create(req.body.testCatalogue)
          
          return res.status(200).json({ status: 200, data: testCatalogues, message: "Succesfully TestCatalogue Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  update: async function (req, res) {
        
      try {

        var testCatalogue = await services.TestCatalogue.update(req.body);
        
        return res.status(200).json({status: 200, data: testCatalogue, message: "Succesfully TestCatalogue Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var testCatalogue = await services.TestCatalogue.remove(req.body.testCatalogue);
        
        return res.status(200).json({status: 200, data: testCatalogue, message: "Succesfully TestCatalogue Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}