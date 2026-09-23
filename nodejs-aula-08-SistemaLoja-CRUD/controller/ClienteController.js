import express from "express";
// Importando o model
import Cliente from "../model/Cliente.js";

const rota = express.Router();

// ROTA CLIENTES
rota.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        // Enviando a lista de clientes para a página HTML
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`);
    });
});
export default rota;
