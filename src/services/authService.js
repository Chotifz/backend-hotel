const prisma = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return user;
};

const login = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  console.log(process.env.JWT_SECRET);
  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) throw new Error("Invalid credentials");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  await prisma.token.create({
    data: {
      token,
      userId: user.id,
    },
  });

  return token;
};

const logout = async (token) => {
  await prisma.token.deleteMany({
    where: { token },
  });
};

const forgotPassword = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) throw new Error("User not found");

  // Generate and send reset password link (implementation detail depends on your email provider)
  // For example purposes, we'll just log it
  const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  console.log(
    `Reset password link: http://localhost:2000/reset-password?token=${resetToken}`
  );
};

const resetPassword = async (token, newPassword) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: decoded.userId },
    data: { password: hashedPassword },
  });
};

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
};
