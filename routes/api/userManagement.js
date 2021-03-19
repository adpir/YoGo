const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport");
const bcrypt = require("bcryptjs");

// GET
// Matches with "/api/users"
router.route("/users").get(userController.findAll);

// Matches with "/api/users/:id"
router.route("/users/:id").get(userController.findById);

// POST
// Matches with "/api/users"
// Wait to implement until there is some security around who can do this
router.route("/users").post(userController.create);

router.post(
  "/login",
  function (req, res, next) {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    var userInfo = {
      email: req.user.email,
    };
    res.send(userInfo);
  }
);

router.get("/user", (req, res) => {
  console.log(req);
  if (req.user) {
    console.log("user");
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
    console.log("no user");
  }
});

// PUT
// Matches with "/api/users/:id"
// Wait to implement until there is some security around who can do this

// DELETE
// Matches with "/api/users/:id"
// Wait to implement until there is some security around who can do this

module.exports = router;
