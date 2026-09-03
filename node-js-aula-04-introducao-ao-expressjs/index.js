// index.js: arquivo principal do back-end

// Importando o Express.js ao projeto // forma clássica (commonJS modules)
const express = require("express");
const nodemon = require("nodemon");

const app = express(); // Criando uma instância do app.

// configurando o EJS
app.set("view engine", "ejs");

// AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// Rota de produtos
app.get("/produtos", (req, res) => {
  res.render("produtos");
});

app.get("/clientes", (req, res) => {
  res.render("clientes");
});

app.get("/servicos", (req, res) => {
  res.render("servicos");
});

app.get("/perfil", (req, res) => {
  res.render("perfil");
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
