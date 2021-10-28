const router = require("express").Router();
const controllers = require("../../controllers");

router.route("/")
.post(controllers.valueType.create)
.get(controllers.valueType.find)
.put(controllers.valueType.update)
.delete(controllers.valueType.remove);


module.exports = router;