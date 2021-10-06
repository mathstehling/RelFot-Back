"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("contract_regional", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      contract_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "contracts", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      regional_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "regional", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    return queryInterface.dropTable("contract_regional");
  },
};
