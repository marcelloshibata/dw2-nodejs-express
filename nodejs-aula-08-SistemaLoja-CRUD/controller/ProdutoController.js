import express from "express";
import Produto from "../model/Produto.js";
const rota = express.Router();

// ROTA PRODUTOS
rota.get("/produtos", function (req, res) {
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        produtos: produtos,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os produtos. Erro: ${error}`);
    });
});
export default rota;
