const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/yogodb");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on ${PORT}!`);
});
