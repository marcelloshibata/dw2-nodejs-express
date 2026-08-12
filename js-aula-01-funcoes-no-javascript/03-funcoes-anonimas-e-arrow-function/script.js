// Função anônima
const mult = function (x) {
  return x * 2;
};

const x = 15;
document.write(`<p>O resultado da multiplicação é ${mult(x)}</p>`);

// Função seta - arrow function (com um único parâmetro)

const triplo = (y) => {
  return y * 3;
};

const y = 100;
document.write(`<p>O triplo de ${y} é ${triplo(y)}</p`);

// FUNÇÃO SETA - COM MAIS DE UM PARÂMETRO - ARROW FUNCTION
const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

// eval no Javascript é uma função nativa que realiza cálculos matemáticos a partir de dois números e um operador
const num1 = 8;
const operador = '*';
const num2 = 2;

document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}</p>`);

// FUNÇÃO IMEDIATA (IIFE - Imediately Invoked Function Expression) - é uma função entre parênteses
const imediata = (function () {
    document.write("<p>Estou sendo executada imedatamente</p>")
})() // Passando os parâmetros

// Função imediata - com parâmetros
const loadUser = (function (user) {
    document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`)
    // Mostrando as informações após 3 segundos
    setTimeout(() => {
        document.write(`
            Nome: Marcello <br>
            Idade: 18 anos <br>
            Cidade: Registro <br>
            Hobby: Jogar
            `);
    }, 3000);
})("Marcello"); // Passando o parâmetro