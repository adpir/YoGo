const router = require("express").Router();
const systemActivityRoutes = require("./systemActivities");

// Activity routes
router.use("/", systemActivityRoutes);

module.exports = router;
