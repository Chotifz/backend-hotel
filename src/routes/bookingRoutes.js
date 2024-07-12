const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
// const authenticateToken = require("../middleware/authMiddleware");

router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBookingById);
router.post("/", bookingController.createBooking);
router.put("/:id", bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
