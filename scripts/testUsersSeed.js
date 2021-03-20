const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yogodb");

const testUsers = [
  {
    userName: "testyTester",
    email: "testy@testy.com",
    firstName: "Testy",
    lastName: "User",
    password: "123123",
    isAdmin: false,
  },
  {
    userName: "testyTester2",
    firstName: "Testy",
    lastName: "McTester II",
    email: "ttesty2@testy.com",
    password: "123123",
    isAdmin: false,
  },
  {
    userName: "testyAdmin",
    firstName: "Testy",
    lastName: "Admin",
    email: "tadmin@testy.com",
    password: "123123",
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
