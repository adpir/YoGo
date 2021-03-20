const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: "User name is Required",
  },
  last_name: {
    type: String,
    trim: true,
    required: "Last Name is Required",
  },
  username: {
    type: String,
    trim: true,
    required: "Username required",
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    required: "Password required!",
    minLength: 6,
    maxLength: 255,
  },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
});

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

UserSchema.methods.isPasswordValid = function (rawPassword, callback) {
  bcrypt.compare(rawPassword, this.password, function (err, same) {
    if (err) {
      callback(err);
    }
    callback(null, same);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
