const express = require("express");
const { test, login } = require("../controller/userLoginController");
const router = express.Router();

router.get("/", test);
router.post("/", login);

module.exports = router;
