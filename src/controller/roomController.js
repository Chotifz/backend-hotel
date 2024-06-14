const {
  getAllRoom,
  getRoomById,
  createRoom,
  deleteRoomById,
  editDataById,
} = require("../services/roomService");

const getRoomsController = async (req, res) => {
  try {
    const rooms = await getAllRoom();

    res.status(200).json({ data: rooms });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getRoomController = async (req, res) => {
  try {
    const roomId = parseInt(req.params.id);
    const room = await getRoomById(roomId);

    res.status(200).json({ data: room });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRoomController = async (req, res) => {
  try {
    const newRoomData = req.body;

    if (
      !newRoomData.name ||
      !newRoomData.price ||
      !newRoomData.description ||
      !newRoomData.image ||
      newRoomData.availability === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const room = await createRoom(newRoomData);
    res.status(200).json({
      data: room,
      message: "create room succes",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteRoomController = async (req, res) => {
  try {
    const roomId = req.params.id;
    await deleteRoomById(parseInt(roomId));
    res.status(200).json({
      message: "Deleted room was succesfull",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const putRoomController = async (req, res) => {
  try {
    const roomId = req.params.id;
    const roomData = req.body;

    if (
      !(
        roomData.name &&
        roomData.price &&
        roomData.description &&
        roomData.image
      )
    ) {
      res.status(404).send("Some field are missing");
      return;
    }

    const room = await editDataById(parseInt(roomId), roomData);

    res.status(200).json({
      data: room,
      message: "edit room sucess",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const patchRoomController = async (req, res) => {
  try {
    const roomId = req.params.id;
    const roomData = req.body;

    const room = await editDataById(parseInt(roomId), roomData);

    res.send({
      data: room,
      message: "edit room sucess",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getRoomsController,
  getRoomController,
  createRoomController,
  deleteRoomController,
  putRoomController,
  patchRoomController,
};
