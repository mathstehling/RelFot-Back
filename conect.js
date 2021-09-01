const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_rel_fotografico", "root", "Wuze4367", {
  host: "localhost",
  dialect: "mysql",
});

const tbl_contrato = sequelize.define("tbl_contrato", {
  id_contrato: {
    type: Sequelize.INTEGER,
  },
  nome_contrato: {
    type: Sequelize.STRING,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
  },
});

tbl_contrato.create({
  nome_contrato: "Alagoinhas",
});
