const express = require("express");
const roomDetailController = require("../controllers/roomDetailController");

const router = express.Router();

router.get("/", roomDetailController.getRoomDetails);
router.get("/:id", roomDetailController.getRoomDetailById);
router.post("/", roomDetailController.createRoomDetail);
router.put("/:id", roomDetailController.updateRoomDetail);
router.delete("/:id", roomDetailController.deleteRoomDetail);

module.exports = router;
