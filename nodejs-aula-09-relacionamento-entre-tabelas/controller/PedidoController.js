import express from "express";
import Pedido from "../model/Pedido.js";
// Importando o Model de Cliente
import Cliente from "../model/Cliente.js";

const rota = express.Router();

// ROTA PEDIDOS
rota.get("/pedidos", function (req, res) {
  // Listando todos os pedidos
  Promise.all([
      Pedido.findAll({
      // Trazendo os dados dos Clientes juntos com os pedidos (Inner Join)
      include: [
        {
          model: Cliente, // Inclui a tabela de Clientes no SELECT
          required: true, // Opcional: Garante que somente pedidos com clientes associados sejam retornados
        },
      ],
    }),
    // Selecionando todos os clientes
    Cliente.findAll()
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        // Enviando a lista de pedidos para a página
        pedidos: pedidos,
        clientes: clientes
      });
    })
    .catch((error) => {
      console.log(`Erro ao listar os pedidos. Erro: ${error}`);
    });
});

rota.post("/pedidos/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;

  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId
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
