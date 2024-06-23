const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get("/get-all-users", UserController.getAllUsers);
router.get(
  "/get-user-by-username/:searchQuery",
  UserController.getUserByUsername
);
router.post("/add-user", UserController.addUser);
router.patch("/soft-delete-user/:id", UserController.softDeleteUser);
router.delete("/delete-user/:id", UserController.deleteUser);
router.put("/update-user/:id", UserController.updateUser);

module.exports = router;
