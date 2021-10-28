const router = require("express").Router();
const controllers = require("../../controllers");

router.route("/")
.post(controllers.Parameter.create)
.get(controllers.Parameter.find)
.put(controllers.Parameter.update)
.delete(controllers.Parameter.remove);


module.exports = router;