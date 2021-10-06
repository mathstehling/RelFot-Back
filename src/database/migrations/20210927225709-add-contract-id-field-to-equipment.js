"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("equipments", "contract_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "contracts", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("equipments", "contract_id");
  },
};
