import express from "express";
import Pedido from "../model/Pedido.js";
const rota = express.Router();

// ROTA PEDIDOS
rota.get("/pedidos", function (req, res) {
  Pedido.findAll()
    .then((pedidos) => {
      res.render("pedidos", {
        pedidos: pedidos,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os pedidos. Erro: ${error}`);
    });
});
export default rota;
