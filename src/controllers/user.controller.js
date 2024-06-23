const UserService = require("../services/user.service");
const BaseController = require("./base.controller");

class UserController extends BaseController {
  getAllUsers = (req, res) => {
    this.handleRequest(req, res, UserService.getAllUsers);
  };

  getUserByUsername = (req, res) => {
    const { searchQuery } = req.params;
    this.handleRequest(req, res, UserService.getUserByUsername, searchQuery);
  };

  addUser = (req, res) => {
    const userData = req.body;
    this.handleRequest(req, res, UserService.addUser, userData);
  };

  softDeleteUser = (req, res) => {
    const { id } = req.params;
    this.handleRequest(req, res, UserService.softDeleteUser, id);
  };

  deleteUser = (req, res) => {
    const { id } = req.params;
    this.handleRequest(req, res, UserService.deleteUser, id);
  };

  updateUser = (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    this.handleRequest(req, res, UserService.updateUser, id, userData);
  };
}

module.exports = new UserController();
