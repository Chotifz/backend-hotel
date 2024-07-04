const roomService = require("../services/roomService");
const cloudinary = require("../utils/cloudinaryConfig");
const fs = require("fs");
const path = require("path");

const getRoomsController = async (req, res) => {
  try {
    const rooms = await roomService.getAllRoom();

    res.status(200).json({ data: rooms });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getRoomById = async (req, res) => {
  try {
    const roomId = parseInt(req.params.id);
    const room = await roomService.getRoomById(roomId);

    if (room) {
      res.status(200).json({ data: room });
    } else {
      res.status(404).json({ message: "Room not found" });
    }
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

    const room = await roomService.createRoom(newRoomData);
    res.status(201).json({
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
    await roomService.deleteRoomById(parseInt(roomId));
    res.status(204).json({
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

    const room = await roomService.editDataById(parseInt(roomId), roomData);

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

    const room = await roomService.editDataById(parseInt(roomId), roomData);

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
  getRoomById,
  createRoomController,
  deleteRoomController,
  putRoomController,
  patchRoomController,
};
