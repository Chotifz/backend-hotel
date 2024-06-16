const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const testApi = async (req, res) => {
  res.send("halow");
};

const register = async (req, res) => {
  // from client
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Email already in use" }); // Jika email sudah digunakan
  }
};

module.exports = { testApi, register };
