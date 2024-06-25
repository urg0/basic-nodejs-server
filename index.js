const express = require("express");
const { syncDatabase } = require("./src/config/database");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const UserRoutes = require("./src/routes/user.route");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/users", UserRoutes);

const startServer = async () => {
  await syncDatabase();

  app.listen(PORT, () => {
    console.log(`welcome`);
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
