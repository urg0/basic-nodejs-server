const express = require("express");
const db = require("./db");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const UserRoutes = require("./src/routes/user.route");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`welcome`);
  console.log(`Server is running on port ${PORT}`);
});
