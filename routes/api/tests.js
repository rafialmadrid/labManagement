const router = require("express").Router();
const controllers = require("../../controllers");

router
.get('/', controllers.Test.findAll)
.post('/', controllers.Test.create)
.put('/', controllers.Test.update)
.delete('/', controllers.Test.remove);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(controllers.Test.findById)
  .put(controllers.Test.update)
  .delete(controllers.Test.remove);*/

module.exports = router;