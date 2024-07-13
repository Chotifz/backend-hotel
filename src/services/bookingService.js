const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBookings = async () => {
  return await prisma.booking.findMany();
};

const getBookingById = async (id) => {
  return await prisma.booking.findUnique({
    where: { id: parseInt(id) },
  });
};

const createBooking = async (data) => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);

  return await prisma.booking.create({
    data: {
      roomId: data.roomId,
      customerName: data.customerName,
      startDate: startDate,
      endDate: endDate,
    },
  });
};

const updateBooking = async (id, data) => {
  return await prisma.booking.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteBooking = async (id) => {
  return await prisma.booking.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
