const prisma = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

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

  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);
  console.log(isValid);

  if (!isValid) throw new Error("Invalid credentials");

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const hashdToken = crypto.createHash("sha256").update(token).digest("hex");

  await prisma.token.create({
    data: {
      token: hashdToken,
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
    `Reset password link: http://your-app/reset-password?token=${resetToken}`
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
