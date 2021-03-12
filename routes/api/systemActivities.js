const router = require("express").Router();
const systemActivityController = require("../../controllers/systemActivityController");

// GET
// Matches with "/api/activities/system/"
router.route("/activities/system").get(systemActivityController.findAll);

// Matches with "/api/activities/system/:id"
router.route("/activities/system/:id").get(systemActivityController.findById);

// POST
// Matches with "/api/activities/system/"
// Wait to implement until there is some security around who can do this

// router.route("/").post(systemActivityController.create);

// PUT
// Matches with "/api/activities/system/:id"
// Wait to implement until there is some security around who can do this

// router.route("/activities/system/:id").put(systemActivityController.update);

// DELETE
// Matches with "/api/activities/system/:id"
// Wait to implement until there is some security around who can do this

// router.route("/activities/system/:id").delete(systemActivityController.remove);

module.exports = router;
