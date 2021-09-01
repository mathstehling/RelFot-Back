const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const sequelize = new Sequelize("db_rel_fotografico", "root", "Wuze4367", {
  host: "localhost",
  dialect: "mysql",
});

/* app.get("/blog", function (req, res) {
  res.send("oi");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/splash.html");
});

app.get("/cargo/:nome/:cargo", function (req, res) {
  res.send("Ola " + req.params.nome + " seu cargo eh:" + req.params.cargo);
}); */

app.listen(8081, function () {
  console.log("servidor rodando");
});
