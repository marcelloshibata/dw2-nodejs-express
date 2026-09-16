// index.js: arquivo principal do back-end

// Importando o Express.js ao projeto // forma clássica (commonJS modules)
// const express = require("express");
// const nodemon = require("nodemon");
import express from "express"; // forma de importação do ES6
import nodemon from "nodemon";

const app = express(); // Criando uma instância do app.

// Importando o controller do produto
import ProdutoController from "./controllers/ProdutoController.js";
import ServicoController from "./controllers/ServicoController.js";
import ClienteController from "./controllers/ClienteController.js";
import UsuarioController from "./controllers/UsuarioController.js";

// CONFIGURAÇÕES DO EXPRESS
// configurando o EJS
app.set("view engine", "ejs");
// configurando a pasta public para arquivos estáticos
app.use(express.static("public"));
// Configurando as rotas
app.use("/", ProdutoController); // Inicializando as rotas de Produto
app.use("/", ServicoController);
app.use("/", ClienteController);
app.use("/", UsuarioController);


// AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// Método do express para iniciar o servidor back-end
// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
