const router = require("express").Router();
const controllers = require("../../controllers");

router
.get('/', controllers.Parameter.findParameters)
.post('/', controllers.Parameter.createParameter)
.put('/', controllers.Parameter.updateParameter)
.delete('/', controllers.Parameter.removeParameter);

// Matches with "/api/books/:id"
/*router
  .route("/:id")
  .get(controllers.Parameter.findById)
  .put(controllers.Parameter.update)
  .delete(controllers.Parameter.remove);*/

module.exports = router;