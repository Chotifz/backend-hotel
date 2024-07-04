const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");
const upload = require("../middleware/multer");

router.get("/", roomController.getRoomsController);
router.get("/:id", roomController.getRoomById);
router.post("/", upload.single("image"), roomController.createRoomController);
router.delete("/:id", roomController.deleteRoomController);
router.put("/:id", upload.single("image"), roomController.putRoomController);
router.patch(
  "/:id",
  upload.single("image"),
  roomController.patchRoomController
);

module.exports = router;
