const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// Creates the data necessary to store in the session cookie
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Reads the session cookie to determine the user from a user ID
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// The strategy used when authenticating a user
passport.use(
  new LocalStrategy(function (email, password, done) {
    // find the user based off the username (case insensitive)
    User.findOne({
      email: email,
    })
      .select("+password")
      .exec(function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "Unknown user: " + username,
          });
        }

        // verify if the password is valid
        user.isPasswordValid(password, function (err, isValid) {
          if (err) {
            return done(err);
          }
          if (isValid) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Invalid password",
            });
          }
        });
      });
  })
);

module.exports = passport;
