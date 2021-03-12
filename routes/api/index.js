const router = require("express").Router();
const systemActivityRoutes = require("./systemActivities");
const userActivityRoutes = require("./userActivities");
const userManagementRoutes = require("./userManagement");

// System Activity Routes
router.use("/", systemActivityRoutes);

// User Activity Routes
router.use("/", userActivityRoutes);

// User Management Routes
router.use("/", userManagementRoutes);

module.exports = router;
