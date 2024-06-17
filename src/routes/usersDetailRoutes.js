const express = require("express");
const userDetailController = require("../controllers/userDetailController");

const router = express.Router();

router.get("/", userDetailController.getUserDetails);
router.get("/:id", userDetailController.getUserDetailById);
router.post("/", userDetailController.createUserDetail);
router.put("/:id", userDetailController.updateUserDetail);
router.delete("/:id", userDetailController.deleteUserDetail);

module.exports = router;
