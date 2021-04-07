var services = require('../services');    

module.exports = {
  
    findAll: async function (req, res, next) {
      // Validate request parameters, queries using express-validator
      
      var page = req.params.page ? req.params.page : 1;
      var limit = req.params.limit ? req.params.limit : 10;
      try { 

          var patients = await services.Patient.findAll({}, page, limit)
          
          return res.status(200).json({ status: 200, data: patients, message: "Succesfully Patients Retrieved" });

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  findById: async function (req, res, next) {
    try {

      var patient = await services.Patient.findById({_id: req.params.id});

      return res.status(200).json({ status: 200, data: patient, message: "Successfully Patient Retrieved"})

    } catch (e) {

      return res.status(400).json({ status: 400, message: e.message });

    }
  },

  create: async function (req, res) {
      // Validate request parameters, queries using express-validator
      
      try { 

          var patients = await services.Patient.create(req.body.patient)
          
          return res.status(200).json({ status: 200, data: patients, message: "Succesfully Patient Created" });
      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  update: async function (req, res) {
        
      try {
        
        var patient = await services.Patient.update(req.body);
        
        return res.status(200).json({status: 200, data: patient, message: "Succesfully Patient Updated"})

      } catch (e) {
          return res.status(400).json({ status: 400, message: e.message });
      }
  },


  remove: async function (req, res) {
      try {

        var patient = await services.Patient.remove(req.body.patient);
        
        return res.status(200).json({status: 200, data: patient, message: "Succesfully Patient Removed"});

      } catch (e) {

        return res.status(400).json({ status: 400, message: e.message });

      }
  }


}