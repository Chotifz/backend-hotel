const express = require("express");
const router = express.Router();
const { register, testApi } = require("../controller/userRegisterController");

router.get("/", testApi);
router.post("/", register);

module.exports = router;
