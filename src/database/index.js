const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Regional = require("../models/Regional");
const Equipment = require("../models/Equipments");
const Contract = require("../models/Contracts");
const Photo = require("../models/Photos");

const connection = new Sequelize(dbConfig);

User.init(connection);
Regional.init(connection);
Equipment.init(connection);
Contract.init(connection);
Photo.init(connection);

User.associate(connection.models);
Regional.associate(connection.models);
Equipment.associate(connection.models);
Contract.associate(connection.models);
Photo.associate(connection.models);

module.exports = connection;
