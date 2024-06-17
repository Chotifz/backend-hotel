const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllRoomDetails = async () => {
  return prisma.roomDetail.findMany();
};

const getRoomDetail = async (id) => {
  return prisma.roomDetail.findUnique({ where: { id: parseInt(id, 10) } });
};

const addRoomDetail = async (data) => {
  return prisma.roomDetail.create({ data });
};

const editRoomDetail = async (id, data) => {
  return prisma.roomDetail.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};

const removeRoomDetail = async (id) => {
  return prisma.roomDetail.delete({ where: { id: parseInt(id, 10) } });
};

module.exports = {
  getAllRoomDetails,
  getRoomDetail,
  addRoomDetail,
  editRoomDetail,
  removeRoomDetail,
};
