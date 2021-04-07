const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/labManagement"
);





  const testCatalogueSeed = [
  {
  code: "BH",
  name: "Citología hemática",
  department: "Hematología",
  units: "String",
  days: 0
    },
  {
  code: "QSP",
  name: "Perfil de químicas",
  department: "Química clínica",
  units: "String",
  days: 0
  },
  {
  code: "EGO",
  name: "Examen general de orina",
  department: "Urianálisis",
  units: "String",
  days: 0
    },
  {
  code: "PTIR",
  name: "Perfil tiroideo",
  department: "Inmunología",
  units: "String",
  days: 0
    },

  
];

db.TestCatalogue
  .deleteMany({})
  .then(() => db.TestCatalogue.collection.insertMany(testCatalogueSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

