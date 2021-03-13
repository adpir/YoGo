const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yogodb");

const testUsers = [
  {
    userName: "Testy",
    email: "tuser@testy.com",
    password: "dsjafasdkfjasdf",
  },
  {
    userName: "Tessadfty",
    email: "tussdafer@testy.com",
    password: "dsjafasdafsdkfjasdf",
  },
  {
    userName: "Tessdfty",
    email: "tusdsafer@testy.com",
    password: "dsjaasfdfasdkfjasdf",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(testUsers))
  .then((data) => {
    console.log(data.result.n + " test users inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
