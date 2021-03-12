const router = require("express").Router();
const userController = require("../../controllers/userController");

// GET
// Matches with "/api/users"
router.route("/users").get(userController.findAll);

// Matches with "/api/users/:id"
router.route("/users/:id").get(userController.findById);

// POST
// Matches with "/api/users"
// Wait to implement until there is some security around who can do this

// PUT
// Matches with "/api/users/:id"
// Wait to implement until there is some security around who can do this

// DELETE
// Matches with "/api/users/:id"
// Wait to implement until there is some security around who can do this

module.exports = router;
