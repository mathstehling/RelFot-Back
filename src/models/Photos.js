const { Model, DataTypes } = require("sequelize");

class Photo extends Model {
  static init(connection) {
    super.init(
      {
        date: DataTypes.DATE,
        uri: DataTypes.STRING,
        name: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: "photos",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Equipment, {
      foreignKey: "equipment_id",
      as: "equipment",
    });
  }
}

module.exports = Photo;
