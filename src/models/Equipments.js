const { Model, DataTypes } = require("sequelize");

class Equipment extends Model {
  static init(connection) {
    super.init(
      {
        number_equipment: DataTypes.STRING,

        state: DataTypes.STRING,
        city: DataTypes.STRING,
        highway: DataTypes.STRING,
        Km: DataTypes.STRING,
        date_afericao: DataTypes.DATE,
        number_report: DataTypes.STRING,
        type: DataTypes.STRING,
        number_lanes: DataTypes.INTEGER,
        way: DataTypes.STRING,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: "equipments",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Regional, {
      foreignKey: "regional_id",
      as: "regional",
    });
    this.belongsTo(models.Contract, {
      foreignKey: "contract_id",
      as: "contract",
    });
    this.hasMany(models.Photo, {
      foreignKey: "equipment_id",
      as: "photos",
    });
  }
}

module.exports = Equipment;
