const router = require("express").Router();
const controllers = require("../../controllers");



router
.post('/patient', controllers.Controller.createPatientWithOrder);

router
.post('/testCatalogue', controllers.Controller.createTestWithParameters);

module.exports = router;





