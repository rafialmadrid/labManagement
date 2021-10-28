var services = require('../services');    

module.exports = {
  


    create: async function (req, res) {
        // Validate request parameters, queries using express-validator
        /*console.log(req.body)*/

        try { 


            var Departments = await services.Department.create(req.body.department)
            
            return res.status(200).json({ status: 200, data: Departments, message: "Succesfully Department Created" });


        } catch (e) {

            return res.status(400).json({ status: 400, message: e.message });
            
        }

    },


    /*findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var Departments = await services.Department.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: Departments, message: "Succesfully Departments Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },*/


  find: async function (req, res, next) {
    try {
      
/*      console.log(req.query);*/

      var query = {}  
      if(req.query.code) query.code = new RegExp(req.query.code, 'i');
      if(req.query.name) query.name = new RegExp( req.query.name, 'i');
      if(req.query._id) query._id = req.query._id;



      var department = await services.Department.find(query);

      return res.status(200).json({ status: 200, data: department, message: "Successfully Department Retrieved"})

    } catch (e) {

      return res.status(400).json({ status: 400, message: e.message });

    }
  },




  update: async function (req, res) {
        
        console.log(req.query);
        var filter = {}
        var update = {}
        
        if(req.query._id) filter._id = req.query._id;
        if(req.query.code) update.code = req.query.code;
        if(req.query.name) update.name = req.query.name;


      try {

        var department = await services.Department.update({filter, update});
        
        return res.status(200).json({status: 200, data: department, message: "Succesfully Department Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var Department = await services.Department.remove(req.body.Department);
        
        return res.status(200).json({status: 200, data: Department, message: "Succesfully Department Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}