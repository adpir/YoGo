const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/yogodb");

db.User.remove({})
  .then(() => db.User.collection.drop())
  .then((data) => {
    console.log("Local User collection dropped.");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
