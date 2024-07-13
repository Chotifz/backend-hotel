const users = require("./userSeed");

const userDetails = [
  {
    userId: users[0].id,
    phoneNumber: "1234567890",
    address: "123 Main St",
    token: "token123",
    status: "active",
    profilePicture: "umar.jpg",
  },
  {
    userId: users[1].id,
    phoneNumber: "0987654321",
    address: "456 Elm St",
    token: "token456",
    status: "active",
    profilePicture: "abu_jahal.jpg",
  },
];

module.exports = userDetails;
