var services = require('../services');    

module.exports = {
  


    create: async function (req, res) {
        // Validate request parameters, queries using express-validator
        console.log(req.body)
        try { 

            var Indications = await services.Indication.create(req.body.indication)
            
            return res.status(200).json({ status: 200, data: Indications, message: "Succesfully Indication Created" });

        } catch (e) {

            return res.status(400).json({ status: 400, message: e.message });
        }

    },


/*    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var Indications = await services.Indication.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: Indications, message: "Succesfully Indications Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },*/



    find: async function (req, res, next) {
      try {
        
        //console.log(req.query);

        var query = {}  
        if(req.query.code) query.code = new RegExp(req.query.code, 'i');
        if(req.query.name) query.name = new RegExp( req.query.name, 'i');
        if(req.query._id) query._id = req.query._id;


        console.log(query);

        var indication = await services.Indication.find(query);

        return res.status(200).json({ status: 200, data: indication, message: "Successfully Indication Retrieved"})

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
    },




    update: async function (req, res) {
          
        try {

          var Indication = await services.Indication.update(req.body);
          
          return res.status(200).json({status: 200, data: Indication, message: "Succesfully Indication Updated"})

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },


  remove: async function (req, res) {
      try {

        var Indication = await services.Indication.remove(req.body.Indication);
        
        return res.status(200).json({status: 200, data: Indication, message: "Succesfully Indication Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}