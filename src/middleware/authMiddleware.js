const jwt = require("jsonwebtoken");
const prisma = require("../db");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);

    const dbUser = await prisma.user.findUnique({ where: { id: user.userId } });
    if (!dbUser) return res.sendStatus(403);

    req.user = dbUser;
    next();
  });
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
