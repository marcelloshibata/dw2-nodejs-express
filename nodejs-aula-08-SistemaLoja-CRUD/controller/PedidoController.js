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

rota.post("/pedidos/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const numero = req.body.num;
  const valor = req.body.valor;

  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Pedido.create({
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o pedido. Erro: ${error}`);
    });
});

rota.get("/pedidos/excluir/:id", (req, res) => {
  const id = req.params.id;

  Pedido.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao deletar o pedido ${id}. Erro: ${error}`);
    });
});

rota.get("/pedidos/editar/:id", (req, res) => {
  const id = req.params.id;

  Pedido.findByPk(id)
    .then((pedido) => {
      res.render("pedidoEditar", {
        pedido: pedido,
      });
    })
    .catch((error) => {
      console.log(
        `Ocorreu um erro ao buscar o pedido para editar. Erro: ${error}`,
      );
    });
});

rota.post("/pedidos/alterar/", (req, res) => {
  const id = req.body.id;
  const numero = req.body.num;
  const valor = req.body.valor;

  Pedido.update(
    {
      numero: numero,
      valor: valor,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o pedido ${id}. Erro: ${error}`);
    });
});

export default rota;
