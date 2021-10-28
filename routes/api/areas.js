const router = require("express").Router();
const controllers = require("../../controllers");

router.route('/')
.post(controllers.Area.create)
.get(controllers.Area.find)
.put(controllers.Area.update)
.delete(controllers.Area.remove);




module.exports = router;