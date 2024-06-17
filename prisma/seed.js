const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const roomSeed = require("../seeds/roomSeed");
const roomDetailSeed = require("../seeds/roomDetailSeed");
const bookingSeed = require("../seeds/bookingSeed");
const userSeed = require("../seeds/userSeed");
const userDetailSeed = require("../seeds/userDetailSeed");

async function clearDatabase() {
  await prisma.booking.deleteMany({});
  await prisma.userDetail.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.room.deleteMany({});
  await prisma.roomDetail.deleteMany({});
}

async function seedDatabase() {
  // RoomDetail;
  await prisma.roomDetail.createMany({ data: roomDetailSeed });

  // Room;
  await prisma.room.createMany({ data: roomSeed });

  // User;
  await prisma.user.createMany({ data: userSeed });

  // UserDetail;
  await prisma.userDetail.createMany({ data: userDetailSeed });

  // Booking
  await prisma.booking.createMany({ data: bookingSeed });

  console.log("Seed data entered successfully");
}

async function main() {
  // await clearDatabase();
  await seedDatabase();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
