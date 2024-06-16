const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("hello");
});

app.use("/auth", authRoutes);
app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);
const server = app.listen(PORT, () => {
  console.log(`Express API running on: http://localhost:${PORT} ...`);
});
