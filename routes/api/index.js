const router = require("express").Router();
const systemActivityRoutes = require("./systemActivities");
const authenticationController = require("../../controllers/authenticationController");

// Activity routes
router.use("/", systemActivityRoutes);

module.exports = router;
