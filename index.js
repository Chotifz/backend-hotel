const express = require("express");
const app = express();
const roomRoutes = require();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/rooms", roomRoutes);

const server = app.listen(PORT, () => {
  console.log(`Express API running on: http://localhost:${PORT} ...`);
});
