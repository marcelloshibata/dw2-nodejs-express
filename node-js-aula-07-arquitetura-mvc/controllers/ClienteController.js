import express from "express";
const rota = express.Router();

rota.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Marcello", cpf: "666.226" },
    { nome: "Camila", cpf: "666.226" },
    { nome: "Daniela", cpf: "666.226" },
    { nome: "Ana", cpf: "666.226" },
  ];

  res.render("clientes", {
    clientes: clientes,
  });
});
export default rota;