const { Model, DataTypes } = require("sequelize");

class Contract extends Model {
  static init(connection) {
    super.init(
      {
        name_contract: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: "contracts",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Equipment, {
      foreignKey: "contract_id",
      as: "equipments",
    });
    this.belongsToMany(models.Regional, {
      foreignKey: "contract_id",
      through: "contract_regional",
      as: "regional",
    });
  }
}

module.exports = Contract;
