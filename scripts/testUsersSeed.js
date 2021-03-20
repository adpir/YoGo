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

let processCount = 0;
testUsers.forEach((user) => {
  db.User.collection.findOne({ email: user.email }, (err, result) => {
    if (!result) {
      db.User.collection
        .insertOne(user)
        .then((data) => {
          processCount++;
          console.log(user.email + " added successfully", processCount);
          // exit the process if all done
          if (processCount === testUsers.length) {
            console.log("ALL DONE");
            process.exit(0);
          }
        })
        .catch((err) => {
          processCount++;
          console.log("Error occurred inserting test user", user.email);
          process.exit(0);
        });
    } else {
      processCount++;
      console.log(user.email + " already exists", processCount);
    }

    // exit the process if all done
    if (processCount === testUsers.length) {
      console.log("ALL DONE");
      process.exit(0);
    }
  });
});
