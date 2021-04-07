const router = require("express").Router();
const controllers = require("../../controllers");



router
.route('/')
	.get(controllers.Patient.findAll)
	.post(controllers.Patient.create)
	.put(controllers.Patient.update)
	.delete(controllers.Patient.remove);

router
	.route('/:id')
	.get(controllers.Patient.findById);

module.exports = router;





