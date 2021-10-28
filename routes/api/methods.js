const router = require("express").Router();
const controllers = require("../../controllers");

router.route('/')
.post(controllers.Method.create)
.get(controllers.Method.find)
.put(controllers.Method.update)
.delete(controllers.Method.remove);




module.exports = router;