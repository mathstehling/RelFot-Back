const express = require("express");
const UserController = require("./controllers/UserController");
const RegionalController = require("./controllers/RegionalController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/regional", RegionalController.index);
routes.post("/regional", RegionalController.store);

module.exports = routes;
