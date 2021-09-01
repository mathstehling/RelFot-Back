var http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res, next) => {
  console.log("retornou todos os contratos");
  const Contratos = [
    { id: 1, cont: "DNIT" },
    { id: 2, cont: "DER" },
    { id: 3, cont: "Alagoinhas" },
  ];
  res.json(Contratos);
});

var server = http.createServer(app);
server.listen(3030);
console.log("Servidor escutando na porta 3030...");
