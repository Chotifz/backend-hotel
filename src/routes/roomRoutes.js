const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

router.get("/", roomController.getRoomsController);
router.get("/:id", roomController.getRoomById);
router.post("/", roomController.createRoomController);
router.delete("/:id", roomController.deleteRoomController);
router.put("/:id", roomController.putRoomController);
router.patch("/:id", roomController.patchRoomController);

module.exports = router;
