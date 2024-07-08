const express = require("express");
const router = express.Router();
const prisma = require("../db");
const { validateContactForm } = require("../middleware/validationMiddleware");

router.post("/send-message", validateContactForm, async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    const contactMessage = await prisma.contactMessage.create({
      data: {
        email,
        subject,
        message,
      },
    });

    res.status(201).json({ data: contactMessage });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
