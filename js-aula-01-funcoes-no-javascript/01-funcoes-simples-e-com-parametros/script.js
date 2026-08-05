// Função simples

function showMessage() {
  const message = "<h2>Olá, bem-vindo</h2>";
  document.write(message);
}

// Invocando a função
showMessage();

// Função com parâmetro / Argumento
const user = "Marcello";

// Essa função recebe um parâmetro
function userMessage(username) {
  document.write(`<h3>O que deseja fazer hoje, ${username}</h3>`);
}

// Invocando a função passando um ARGUMENTO
userMessage(user);

// Função com mais de um parâmetro
const n1 = 10;
const n2 = 5;

function soma(n1, n2) {
  let resultado = n1 + n2;
  document.write(`A soma de ${n1} + ${n2} é igual a ${resultado}`);
}

soma(n1, n2);
