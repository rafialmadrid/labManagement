const router = require("express").Router();

const areaRoutes = require("./areas");
const departmentRoutes = require("./departments");

const testCatalogueRoutes =  require("./testCatalogue");
const parameterRoutes = require("./parameters");

const valueTypeRoutes = require("./valueType");

const methodRoutes = require("./methods");
const indicationRoutes = require("./indications");

const patientRoutes = require("./patients");
const orderRoutes = require("./orders");
const testRoutes = require("./tests");
const resultRoutes = require("./results");

const controllerRoutes = require("./controller");


// routes
router.use("/areas", areaRoutes);
router.use("/departments", departmentRoutes);

router.use("/testCatalogue", testCatalogueRoutes);
router.use("/parameters", parameterRoutes);
router.use("/valueTypes", valueTypeRoutes);

router.use("/methods", methodRoutes);
router.use("/indications", indicationRoutes);

router.use("/patients", patientRoutes);
router.use("/orders", orderRoutes);
router.use("/tests", testRoutes);
router.use("/results", resultRoutes);
router.use("/controller", controllerRoutes);

module.exports = router;
