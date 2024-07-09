const express = require("express");
const userController = require("../controllers/userController");
// const { authenticate } = require("../middleware/authMiddleware");
const { validateUser } = require("../middleware/validationMiddleware");

const router = express.Router();

router.get(
  "/",
  // authenticate,
  userController.getAllUsers
);
router.get(
  "/:id",
  // authenticate,
  userController.getUserById
);

router.put(
  "/:id",
  // authenticate,
  validateUser,
  userController.updateUser
);
router.delete(
  "/:id",
  // authenticate,
  userController.deleteUser
);

module.exports = router;
