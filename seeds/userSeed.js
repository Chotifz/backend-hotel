const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Umar",
    email: "umar1995@example.com",
    password: "password321",
  },
  {
    id: uuidv4(),
    name: "Abu Jahal",
    email: "abujahal1995@example.com",
    password: "password123",
  },
];

module.exports = users;
