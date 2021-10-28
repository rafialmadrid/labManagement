const router = require("express").Router();
const controllers = require("../../controllers");

router.route('/')
.post(controllers.TestCatalogue.create)
.get(controllers.TestCatalogue.find)
.put(controllers.TestCatalogue.update)
.delete(controllers.TestCatalogue.remove);





module.exports = router;