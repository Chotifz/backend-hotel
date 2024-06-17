const prisma = require("../db");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  return await prisma.$queryRaw`select * from user`;
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
};

const createUser = async (userData) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  return await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  });
};

const updateUser = async (id, userData) => {
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
  }
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data: userData,
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
