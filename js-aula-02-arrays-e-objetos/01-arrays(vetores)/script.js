// Vetores no Javascript
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];
let aluno = "Matheus";

document.write(
  `O tipo da variável que recebe um vetor no Javascript é: <strong>${typeof produtos}</strong>`,
);
document.write(`<br>O tipo da variável aluno é: <strong>${typeof aluno}`);

document.write("<br>Exibindo os itens do vetor pelo índice: <br>");

document.write(`<p>${produtos[0]}</p>`);
document.write(`<p>${produtos[1]}</p>`);
document.write(`<p>${produtos[2]}</p>`);
document.write(`<p>${produtos[3]}</p>`);

document.write(
  "<br><br>Exibindo os itens do vetor através do <strong>forEach:</strong>",
);

produtos.forEach((produto) => {
  // Para cada produto da lista de produtos faça:
  document.write(`<p>${produto}</p>`);
});

document.write("<br>Exibindo os itens do vetor e os índices com o forEach:");
produtos.forEach((produto, indice) => {
  document.write(`<p>${indice + 1} - ${produto}</p>`);
});
