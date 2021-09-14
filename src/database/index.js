const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Regional = require("../models/Regional");

const connection = new Sequelize(dbConfig);

User.init(connection);
Regional.init(connection);

module.exports = connection;
