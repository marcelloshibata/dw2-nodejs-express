// OBJETO
const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000.0,
  descricao: "PC moderno com bom desempenho",
};

document.write(`<p>${produto}</p>`);

// Acessando os atributos do objeto
document.write(
  `<p>${produto.nome}, ${produto.marca}, custa R$ ${produto.preco} <br> ${produto.descricao}</p>`,
);

// Array de objeto
document.write(`<h3>Array de objetos:</h3>`);
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento",
  },
  {
    nome: "Iphone",
    marca: "Apple",
    preco: 13000,
    descricao: "Ultra resistente! Não quebra nunca",
  },
];

// Exibindo informações dos produtos com forEach
document.write(`<h4>Produtos em promoção</h4>`);

listaProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: ${produto.preco} <br>
        Descrição: ${produto.descricao} <br><br>`);
});
