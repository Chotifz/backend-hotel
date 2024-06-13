const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");
router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBookingById);
router.post("/", bookingController.createBooking);
router.put("/:id", bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
