const express = require("express");
const router = express.Router();

const {
  getRoomsController,
  getRoomController,
  createRoomController,
  deleteRoomController,
  putRoomController,
  patchRoomController,
} = require("../controller/roomController");

router.get("/", getRoomsController);
router.get("/:id", getRoomController);
router.post("/", createRoomController);
router.delete("/:id", deleteRoomController);
router.put("/:id", putRoomController);
router.patch("/:id", patchRoomController);

module.exports = router;
