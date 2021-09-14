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
}

module.exports = Regional;
