const router = require("express").Router();
const postRoutes = require("./books");

// Books routes
router.use("/books", postRoutes);

module.exports = router;