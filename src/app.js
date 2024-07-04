const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");
const roomDetailRoutes = require("./routes/roomDetailRoutes");
const userDetailRoutes = require("./routes/usersDetailRoutes");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("hello");
});

app.use("/auth", authRoutes);
app.use("/rooms", roomRoutes);
app.use("/room-details", roomDetailRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);
app.use("/user-details", userDetailRoutes);

app.listen(PORT, () => {
  console.log(`Express API running on: http://localhost:${PORT} ...`);
});
