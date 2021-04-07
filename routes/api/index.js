const router = require("express").Router();

const patientRoutes = require("./patients");
const orderRoutes = require("./orders");
const testRoutes = require("./tests");
const resultRoutes = require("./results");
const testCatalogueRoutes =  require("./testCatalogue");
const parameterRoutes = require("./parameters")
const controllerRoutes = require("./controller");

// routes
router.use("/patients", patientRoutes);
router.use("/orders", orderRoutes);
router.use("/tests", testRoutes);
router.use("/results", resultRoutes);
router.use("/testCatalogue", testCatalogueRoutes);
router.use("/parameters", parameterRoutes);
router.use("/controller", controllerRoutes);

module.exports = router;
