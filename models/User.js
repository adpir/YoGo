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

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// temporarily removed isAdmin for auth implementation
UserSchema.pre("save", function (next) {
  // didnt provide password
  if (!this.password) {
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
