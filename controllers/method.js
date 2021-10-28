var services = require('../services');    

module.exports = {
  


    create: async function (req, res) {
        // Validate request parameters, queries using express-validator
        console.log(req.body)
        try { 

            var Methods = await services.Method.create(req.body.method)
            
            return res.status(200).json({ status: 200, data: Methods, message: "Succesfully Method Created" });

        } catch (e) {

            return res.status(400).json({ status: 400, message: e.message });
        }

    },


/*    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var Methods = await services.Method.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: Methods, message: "Succesfully Methods Retrieved" });

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

        var method = await services.Method.find(query);

        return res.status(200).json({ status: 200, data: method, message: "Successfully Method Retrieved"})

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
    },




    update: async function (req, res) {
          
        try {

          var Method = await services.Method.update(req.body);
          
          return res.status(200).json({status: 200, data: Method, message: "Succesfully Method Updated"})

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },


  remove: async function (req, res) {
      try {

        var Method = await services.Method.remove(req.body.Method);
        
        return res.status(200).json({status: 200, data: Method, message: "Succesfully Method Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}