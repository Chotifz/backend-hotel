const { v4: uuidv4 } = require("uuid");
const users = require("./userSeed");

const bookings = [
  {
    roomId: 1,
    userId: users.find((user) => user.name === "Umar").id,
    customerName: "Umar",
    startDate: new Date("2024-07-15T00:00:00Z"),
    endDate: new Date("2024-07-20T00:00:00Z"),
  },
  {
    roomId: 2,
    userId: users.find((user) => user.name === "Abu Jahal").id,
    customerName: "Abu Jahal",
    startDate: new Date("2024-07-18T00:00:00Z"),
    endDate: new Date("2024-07-22T00:00:00Z"),
  },
];

module.exports = bookings;
