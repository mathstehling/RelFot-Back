const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Regional, {
      foreignKey: "user_id",
      through: "user_regional",
      as: "regional",
    });
  }
}

module.exports = User;
