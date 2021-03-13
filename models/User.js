const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "User name is Required",
  },
  // lastName: {
  //   type: String,
  //   trim: true,
  //   required: "Last Name is Required",
  // },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  password: {
    type: String,
    unique: true,
    required: "Password required!",
    minLength: 6,
    maxLength: 255,
  },
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
});

// temporarily removed isAdmin for auth implementation

const User = mongoose.model("User", UserSchema);

module.exports = User;
