const router = require("express").Router();
const controllers = require("../../controllers");

router.route('/')
.post(controllers.Indication.create)
.get(controllers.Indication.find)
.put(controllers.Indication.update)
.delete(controllers.Indication.remove);




module.exports = router;