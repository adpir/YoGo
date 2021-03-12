const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yogodb");

const testUsers = [
  {
    firstName: "Testy",
    lastName: "User",
    email: "tuser@testy.com",
    isAdmin: false,
  },
  {
    firstName: "Testy",
    lastName: "McTester",
    email: "ttesty@testy.com",
    isAdmin: false,
  },
  {
    firstName: "Testy",
    lastName: "Admin",
    email: "tadmin@testy.com",
    isAdmin: true,
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
