/* 1. Crie um array chamado estoqueProdutos que contenha pelo menos três objetos. Cada objeto
deve representar um produto com as seguintes propriedades: nome (string), marca (string),
preco (number) e descricao (string). */
let estoqueProdutos = [
  {
    nome: "Teclado mecânico",
    marca: "Logitech",
    preco: 300,
    descricao: "Teclado ideal para jogos competitivos",
  },
  {
    nome: "Mouse Gamer",
    marca: "Razer",
    preco: 200,
    descricao: "Mouse bonito com alta precisão",
  },
  {
    nome: "Mousepad",
    marca: "Aimstar",
    preco: 100,
    descricao: "Mousepad focado para desempenho em jogos",
  },
];

// 2. Criar loop forEach para percorrer o estoque, exibindo no navegador.
document.write(`<h3>Lista de produtos:</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>`);
});

// 3. Adicione um novo produto ao final de estoqueProdutos utilizando o método push()
estoqueProdutos.push({
  nome: "Monitor",
  marca: "Samsung",
  preco: 700,
  descricao: "Painel IPS com cores vivas",
});

document.write(`<h3>Atualização da lista de produtos com push:</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>`);
});

// 4. Adicione um novo produto ao início do estoqueProdutos utilizando o método unshift().
estoqueProdutos.unshift({
  nome: "Controle DualSense",
  marca: "Sony Playstation",
  preco: 300,
  descricao: "Controle com bons analógicos",
});

document.write(`<h3>Atualização da lista de produtos com unshift:</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>`);
});


// 5. Ordene o estoqueProdutos em ordem crescente de preço e exiba o array ordenado no
// navegador. Utilize document.write para exibir os produtos, formatando o preço para duas
// casas decimais e com o símbolo R$. Utilize o método sort() com uma função de comparação.
document.write(
  `<h3>Atualização da lista de produtos com sort em ordem crescente de preço:</h3>`,
);

estoqueProdutos.sort((a, b) => a.preco > b.preco).forEach((produto) => {
  document.write(`Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco.toFixed(2)} <br>
        Descrição: ${produto.descricao} <br> <br>`);
});
