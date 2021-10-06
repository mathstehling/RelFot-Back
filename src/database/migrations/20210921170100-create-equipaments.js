"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("equipments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      regional_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "regional", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      number_equipment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code_DNIT: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      code_DER: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      highway: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      KM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_afericao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      number_report: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_lanes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      way: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("equipments");
  },
};
