// index.js: arquivo principal do back-end

// Importando o Express.js ao projeto // forma clássica (commonJS modules)
const express = require("express");
const nodemon = require("nodemon");

const app = express(); // Criando uma instância do app.

// configurando o EJS
app.set("view engine", "ejs");

// configurando a pasta public para arquivos estáticos
app.use(express.static("public"));

// AQUI IRÃO AS ROTAS DO SITE:
// ROTA PRINCIPAL
// .get() -> Cria uma rota na aplicação
app.get("/", (req, res) => {
  res.render("index");
});

// Rota de produtos
app.get("/produtos", (req, res) => {
  // Lista de produtos (dados mockados)
  // Futuramente os dados virão do banco de dados

  const produtos = [
    { nome: "Computador", marca: "Lenovo", preco: 3500 },
    { nome: "Celular", marca: "Samsung", preco: 4000 },
    { nome: "Notebook", marca: "Dell", preco: 5100 },
    { nome: "Tablet", marca: "Asus", preco: 2400 },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

app.get("/clientes", (req, res) => {
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
