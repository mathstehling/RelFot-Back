const { Model, DataTypes } = require("sequelize");

class Regional extends Model {
  static init(connection) {
    super.init(
      {
        name_regional: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: "regional",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "regional_id",
      through: "user_regional",
      as: "users",
    });
    this.belongsToMany(models.Contract, {
      foreignKey: "regional_id",
      through: "contract_regional",
      as: "contract",
    });
    this.hasMany(models.Equipment, {
      foreignKey: "regional_id",
      as: "equipments",
    });
  }
}

module.exports = Regional;
