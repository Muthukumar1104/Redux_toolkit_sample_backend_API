const express = require("express");
const router = express.Router();

router.use("/auth",require("./auth-router"))
router.use("/customer", require("./user-router"));

module.exports = router;
