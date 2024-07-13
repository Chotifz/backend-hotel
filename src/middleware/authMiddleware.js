const jwt = require("jsonwebtoken");
const prisma = require("../db");
const crypto = require("crypto");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const dbToken = await prisma.token.findUnique({
      where: { token: hashedToken },
    });

    if (!dbToken) return res.sendStatus(403);

    const dbUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!dbUser) return res.sendStatus(403);

    req.user = dbUser;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

// const authenticateToken = (req, res, next) => {
//   const token = req.header("Authorization").replace("Bearer ", "");

//   if (!token) {
//     return res.status(401).json({ message: "Access denied, token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

module.exports = {
  authenticate,
  // authenticateToken
};
