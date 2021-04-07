const router = require("express").Router();
const controllers = require("../../controllers");

router.route('/')
.get(controllers.TestCatalogue.findAll)
.post(controllers.TestCatalogue.create)
.put(controllers.TestCatalogue.update)
.delete(controllers.TestCatalogue.remove);

// Matches with "/api/testCatalogue/:id"
/*router
.route("/:id")
.get(controllers.TestCatalogue.findById);*/

router
.route("/:code")
.get(controllers.TestCatalogue.findByCode);


module.exports = router;