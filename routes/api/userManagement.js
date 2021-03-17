const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport");

// GET
// Matches with "/api/users"
router.route("/users").get(userController.findAll);

// Matches with "/api/users/:id"
router.route("/users/:id").get(userController.findById);

// POST
// Matches with "/api/users"
// Wait to implement until there is some security around who can do this
router.route("/users").post(userController.create);

router.route("users/login").post(
  function (req, res, next) {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    res.send({ username: req.user.username });
  }
);

router.get("/user", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

// PUT
// Matches with "/api/users/:id"
// Wait to implement until there is some security around who can do this

// DELETE
// Matches with "/api/users/:id"
// Wait to implement until there is some security around who can do this

module.exports = router;
