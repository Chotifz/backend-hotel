const express = require("express");
const dotenv = require("dotenv");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("hello");
});

app.use("/rooms", roomRoutes);

app.use("/bookings", bookingRoutes);
const server = app.listen(PORT, () => {
  console.log(`Express API running on: http://localhost:${PORT} ...`);
});
