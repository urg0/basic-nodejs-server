const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:searchQuery", UserController.getUserByUsername);
router.post("/add", UserController.addUser);
router.patch("/:id", UserController.softDeleteUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);

module.exports = router;
