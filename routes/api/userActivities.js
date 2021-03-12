const router = require("express").Router();
const userActivityController = require("../../controllers/userActivityController");

// GET
// Matches with "/api/activities/users/"
router.route("/activities/users").get(userActivityController.findAll);

// Matches with "/api/activities/users/:id"
router.route("/activities/users/:id").get(userActivityController.findById);

// POST
// Matches with "/api/activities/users/"
// commenting out until we have authentication and can attach the user _id with the new activity

// router.route("/activities/users").post(userActivityController.create);

// PUT
// Matches with "/api/activities/system/:id"
// Wait to implement until there is some security around who can do this

// router.route("/activities/system/:id").put(systemActivityController.update);

// DELETE
// Matches with "/api/activities/system/:id"
// Wait to implement until there is some security around who can do this

// router.route("/activities/user/:id").delete(userActivityController.remove);

module.exports = router;
