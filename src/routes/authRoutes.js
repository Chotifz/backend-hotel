const express = require("express");
const authController = require("../controllers/authController");
const {
  validateRegister,
  validateLogin,
} = require("../middleware/validationMiddleware");
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", validateRegister, authController.register);
router.post("/login", validateLogin, authController.login);
router.post("/logout", authenticate, authController.logout);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
