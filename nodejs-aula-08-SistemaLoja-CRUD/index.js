// Importando o Express
import express from "express";
// Importando arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express
const app = express();

import PedidoController from "./controller/PedidoController.js";
import ProdutoController from "./controller/ProdutoController.js";
import ClienteController from "./controller/ClienteController.js";

// Importando os models
import Cliente from "./model/Cliente.js";
import Pedido from "./model/Pedido.js";
import Produto from "./model/Produto.js";

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Relizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    // Sucesso na promessa:
    console.log("Conexão com o banco de dados realizada com sucesso!");
    // Falha na promessa
  })
  .catch((error) => {
    console.log(
      `Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`,
    );
  });

// CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = "loja";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`).then(() => {
  console.log(`O banco de dados ${DB_NAME} está criado!`);
}).catch((error) => {
  console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
})

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

app.use("/", PedidoController);
app.use("/", ProdutoController);
app.use("/", ClienteController);

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
