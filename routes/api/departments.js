const router = require("express").Router();
const controllers = require("../../controllers");

router.route('/')
.post(controllers.Department.create)
.get(controllers.Department.find)
.put(controllers.Department.update)
.delete(controllers.Department.remove);



module.exports = router;