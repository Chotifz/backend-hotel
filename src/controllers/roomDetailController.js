const roomDetailService = require("../services/roomDetailService");

const getRoomDetails = async (req, res) => {
  try {
    const roomDetails = await roomDetailService.getAllRoomDetails();
    res.json({ data: roomDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoomDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const roomDetail = await roomDetailService.getRoomDetail(id);
    res.json({ data: roomDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRoomDetail = async (req, res) => {
  try {
    const roomDetailData = req.body;
    const newRoomDetail = await roomDetailService.addRoomDetail(roomDetailData);
    res.json({ data: newRoomDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoomDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const roomDetailData = req.body;
    const updatedRoomDetail = await roomDetailService.editRoomDetail(
      id,
      roomDetailData
    );
    res.json({ data: updatedRoomDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRoomDetail = async (req, res) => {
  try {
    const { id } = req.params;
    await roomDetailService.removeRoomDetail(id);
    res.json({ message: "Room detail deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRoomDetails,
  getRoomDetailById,
  createRoomDetail,
  updateRoomDetail,
  deleteRoomDetail,
};
