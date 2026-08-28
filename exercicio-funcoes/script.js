// 1. Função simples
document.write("<h2>Função simples</h2>");

function showUser() {
  document.write(`
        Nome: Marcello <br>
        Idade: 18 <br>
        Cidade: Juquiá`);
}

showUser();

// 2. Função com parâmetros
document.write("<h2>Função com parâmetros</h2>");

function division(x, y) {
  const resultado = x / y;
  document.write(`O resultado da divisão é ${resultado}`);
}

const x = 6;
const y = 3;

division(x, y);

// 3. Função com retorno
document.write("<h2>Função com retorno</h2>");

function mult(a, b, c) {
  return a * b * c;
}

const a = 10;
const b = 8;
const c = 26;

document.write(
  `O resultado da multiplicação de ${a}, ${b} e ${c} é igual a ${mult(a, b, c)}`,
);

// 4. Função com mais de um retorno
document.write("<h2>Função com mais de um retorno</h2>");

function ageCheck(age) {
  if (age >= 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
}

age = 18;
document.write(`O usuário é <strong>${ageCheck(age)}</strong>`);

// 5. Função anônima
document.write("<h2>Função anônima</h2>");

const gradeApprover = function (grade1, grade2) {
  const result = (grade1 + grade2) / 2;
  if (result <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
};

const grade1 = 10;
const grade2 = 9;

document.write(`O aluno foi <strong>${gradeApprover(grade1, grade2)}</strong>`);

// 6. Arrow function com parâmetro único
document.write("<h2>Arrow function com parâmetro único</h2>");

const triple = (num3) => {
  return num3 * 3;
};

num3 = 26;

document.write(`O triplo do número ${num3} é ${triple(num3)}`);

// 7. Arrow function com mais de um parâmetro
document.write("<h2>Arrow function com mais de um parâmetro</h2>");

const sum = (d, e, f, g) => {
  return d + e + f + g;
};

const d = 6;
const e = 30;
const f = 40;
const g = 20;

document.write(`O valor da soma é ${sum(d, e, f, g)}`);

// 8. IIFE Função anônima
document.write("<h2>IIFE Função anônima</h2>");

const greeting = (function (name) {
  document.write(`Olá, seja bem-vindo <strong>${name}!</strong>`);
})("Marcello");
