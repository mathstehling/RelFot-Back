const express = require("express");

const UserController = require("./controllers/UserController");
const RegionalController = require("./controllers/RegionalController");
const EquipmentController = require("./controllers/EquipmentController");
const ContractController = require("./controllers/ContractController");
const PhotoController = require("./controllers/PhotoController");

const routes = express.Router();

/* routes.get("/users", UserController.index);
routes.post("/users", UserController.store); */

routes.get("/login", UserController.index);
routes.post("/login", UserController.store);

routes.get("/contracts", ContractController.index);
routes.post("/contracts", ContractController.store);

routes.get("/regional/:regional_id/contract", ContractController.index);
routes.post("/regional/:regional_id/contract", ContractController.store);

routes.get("/users/:user_id/regional", RegionalController.index);
routes.post("/users/:user_id/regional", RegionalController.store);

routes.get(
  "/regional/:regional_id/:contract_id/equipments",
  EquipmentController.index
);
routes.post(
  "/regional/:regional_id/:contract_id/equipments",
  EquipmentController.store
);

routes.get("/regional/:equipment_id/photos", PhotoController.index);
routes.post("/regional/:equipment_id/photos", PhotoController.store);

module.exports = routes;
