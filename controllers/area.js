var services = require('../services');    

module.exports = {

    create: async function (req, res) {
      // Validate request parameters, queries using express-validator
      console.log(req.body)
      try { 
          var Areas = await services.Area.create(req.body.area)
          return res.status(200).json({ status: 200, data: Areas, message: "Succesfully Area Created" });
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
        console.log(query);
        var area = await services.Area.find(query);
        return res.status(200).json({ status: 200, data: area, message: "Successfully Area Retrieved"})
      } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
      }
    },

    update: async function (req, res) {        
        console.log(req.query)
        var filter = {}
        var update = {}
        if(req.query._id) filter._id = req.query._id;
        if(req.query.code) update.code = req.query.code;
        if(req.query.name) update.name = req.query.name;
        if(req.query.department) update.department = req.query.department;
        try {
          var area = await services.Area.update({filter, update});
          return res.status(200).json({status: 200, data: area, message: "Succesfully Area Updated"})
        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    },


  remove: async function (req, res) {
      try {

        var Area = await services.Area.remove(req.body.Area);
        
        return res.status(200).json({status: 200, data: Area, message: "Succesfully Area Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}