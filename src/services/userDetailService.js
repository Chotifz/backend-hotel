const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUserDetails = async () => {
  return prisma.userDetail.findMany();
};

const getUserDetail = async (id) => {
  return prisma.userDetail.findUnique({ where: { id: parseInt(id, 10) } });
};

const addUserDetail = async (data) => {
  return prisma.userDetail.create({ data });
};

const editUserDetail = async (id, data) => {
  return prisma.userDetail.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};

const removeUserDetail = async (id) => {
  return prisma.userDetail.delete({ where: { id: parseInt(id, 10) } });
};

module.exports = {
  getAllUserDetails,
  getUserDetail,
  addUserDetail,
  editUserDetail,
  removeUserDetail,
};
