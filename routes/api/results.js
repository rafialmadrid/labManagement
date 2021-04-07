const router = require("express").Router();
const controllers = require("../../controllers");

router.route("/")
.get(controllers.Result.findAll)
.post(controllers.Result.create)
.put(controllers.Result.update)
.delete(controllers.Result.remove);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(controllers.Result.findById)
  .put(controllers.Result.update)
  .delete(controllers.Result.remove);*/


module.exports = router;