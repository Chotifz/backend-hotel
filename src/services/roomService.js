const prisma = require("../db");

const getAllRoom = async () => {
  const rooms = await prisma.$queryRaw`select * from room`;
  return rooms;
};

const getRoomById = async (id) => {
  const room = await prisma.room.findUnique({
    where: {
      id,
    },
  });

  if (!room) {
    throw Error("Room not found");
  }
  return room;
};

const createRoom = async (newRoomData) => {
  const room = await prisma.room.create({
    data: {
      name: newRoomData.name,
      price: newRoomData.price,
      description: newRoomData.description,
      image: newRoomData.image,
      availability: newRoomData.availability,
    },
  });
  return room;
};

const deleteRoomById = async (id) => {
  await getRoomById(id);
  await prisma.room.delete({
    where: {
      id,
    },
  });
};

const editDataById = async (id, roomData) => {
  if (!id || typeof id !== "number") {
    throw new Error("Invalid roomId");
  }
  if (!roomData || typeof roomData !== "object") {
    throw new Error("Invalid roomData");
  }
  const room = await prisma.room.update({
    where: {
      id,
    },
    data: {
      name: roomData.name,
      price: roomData.price,
      description: roomData.description,
      image: roomData.image,
    },
  });
  return room;
};

module.exports = {
  getAllRoom,
  getRoomById,
  createRoom,
  deleteRoomById,
  editDataById,
};
