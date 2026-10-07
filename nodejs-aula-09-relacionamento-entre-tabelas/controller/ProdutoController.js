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

// Cadastro
rota.post("/produtos/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o produto. Erro: ${error}`);
    });
});

rota.get("/produtos/excluir/:id", (req, res) => {
  const id = req.params.id;

  Produto.destroy({ where: { id: id } })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o produto ${id}. Erro: ${error}`);
    });
});

rota.get("/produtos/editar/:id", (req, res) => {
  const id = req.params.id;

  Produto.findByPk(id)
    .then((produto) => {
      res.render("produtoEditar", {
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(
        `Ocorreu um erro ao buscar o produto para editar. Erro: ${error}`,
      );
    });
});

rota.post("/produtos/alterar/", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;

  Produto.update(
    {
      nome: nome,
      preco: preco,
      categoria: categoria,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o produto ${id}. Erro: ${error}`);
    });
});
export default rota;
