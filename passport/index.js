const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log("DeserializeUser called");
  User.findOne({ _id: id }, "username", (err, user) => {
    done(null, user);
  });
});

passport.use(LocalStrategy);

module.exports = passport;
