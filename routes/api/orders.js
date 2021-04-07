const router = require("express").Router();
const controllers = require("../../controllers");

router
.get('/', controllers.Order.findAll)
.post('/', controllers.Order.create)
.put('/', controllers.Order.update)
.delete('/', controllers.Order.remove);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(controllers.Order.findById)
  .put(controllers.Order.update)
  .delete(controllers.Order.remove);*/

	
module.exports = router;