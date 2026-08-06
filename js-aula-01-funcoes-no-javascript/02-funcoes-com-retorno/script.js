// Funções com retorno
const n1 = 50;
const n2 = 3;

// Essa função gera um resultado e exporta
function multiplicar(n1, n2) {
  return n1 * n2; // operador de multiplicação
}

// Exibindo o resultado
document.write(
  `<p>A multiplicação de ${n1} por ${n2} é igual a <strong> ${multiplicar(n1, n2)}</strong>.`,
);

// Funções com mais de um retorno
const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`O número ${number} é <strong>${parImpar(number)}</strong>.`);
