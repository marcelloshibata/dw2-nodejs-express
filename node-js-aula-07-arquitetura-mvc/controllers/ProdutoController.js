// importando o framework Express
import express from "express";
// Router(): Método do express para criar rotas
const rota = express.Router();

// Rota de produtos
rota.get("/produtos", (req, res) => {
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
// Exportando o modulo
export default rota;