const db = require("../models");
const bcrypt = require("bcrypt");

const authenticationController = {
  register: async function (req, res) {
    try {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      db.User.create({
        userName: req.body.name,
        email: req.body.email,
        password: hashedPass,
      }).then((userData) =>
        res.send({ user: userData.id, message: "Successfully signed up!" })
      );
    } catch (err) {
      // something went very very wrong
      res.send(err);
    }
  },
  login: (req, res) => {
    db.User.findOne({
      where: {
        // email will probably be the most unique
        email: req.body.email,
      },
    })
      .then(async function (userData) {
        if (!userData) {
          res.send({
            user: false,
            message: "No user associated with given email!",
          });
          return;
        }
        if (await bcrypt.compare(req.body.password, userData.password)) {
          res.send({ user: userData.id, message: "Successful login!" });
        } else {
          // email found, but not a successful login.. other option, failed password
          res.send({ user: false, message: "Password incorrect!" });
        }
      })
      .catch((err) => res.send(err));
  },
};

module.exports = authenticationController;
