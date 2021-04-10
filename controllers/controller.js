var services = require('../services');    

  Array.prototype.asyncForEach = async function(callback, thisArg) {

    thisArg = thisArg || this
    for (let i = 0, l = this.length; i !== l; ++i) {
      await callback.call(thisArg, this[i], i, this)

    }
  }

module.exports = {
  
  createPatientWithOrder: async function(req, res){
            
            
            
      try{

      const patient = await services.Patient.create(req.body.patient);

      const patientId = patient._id;
      
      const order = await services.Order.create(req.body.order);

      const orderId = order._id; 
      
      const updatePatient = await services.Patient.update({_id: patientId, data: {orders: orderId}});

       await req.body.test.asyncForEach(async (test) => {
            
            const patientTest = await services.Test.create(test);

            const patientTestId = patientTest._id;
            
            const updateOrder = await services.Order.update({_id: orderId, data: {tests: patientTestId}});

            const testCatalogue = await services.TestCatalogue.findById({_id: test.testCatalogueId});
          
            parameters = testCatalogue.parameters;

                await parameters.asyncForEach(async (parameter) => {
                
                parameterId = parameter._id;

                const result = await services.Result.create({"value": null, "text": ""});

                const resultId = result._id;
                
                const updateTest = await services.Test.update({_id: patientTestId, data: {results: resultId}});

                const updateResult = await services.Result.update({_id: resultId, data: {parameter: parameterId}});

            
              });

        });

      

      const getPatient = await services.Patient.findById(patientId);
      

      res.status(200).json({ status: 200, data: {getPatient}, message: "Succesfully Patient Created" });      

      }catch(e){
        return res.status(400).json({ status: 400, message: e.message });
    } 

  },



  /*createTestWithParameters: async function( req, res ){

    try{

      console.log(req.body.testCatalogue);
      const testCatalogues = await services.TestCatalogue.create(req.body.testCatalogue);
      const testCataloguesId = testCatalogues._id;

      await req.body.parameters.asyncForEach(async (parameter) => {

        const parameters = await services.Parameter.create(parameter);
        const parameterId = parameters._id;

        const updateTestCatalogues = await services.TestCatalogue.update({_id: testCataloguesId, data: {parameters: parameterId}})

      });


      const getTestCatalogue = await services.TestCatalogue.findById(testCataloguesId);
      res.status(200).json({ status: 200, data: {getTestCatalogue}, message: "Succesfully Test Catalogue Created" });      

    }catch(e){

        return res.status(400).json({ status: 400, message: e.message });

    }
    
  }*/


}



//Arquitectura modelo manejador controlador y ruta
//Manejador hace los queries a la base de datos
//Controlador consumiria cuantos manejadores necesite dentro de ese controlador
//Como hacer que controlador consuma resultado del manejador usando async await
