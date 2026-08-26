document.write("<h3>Manipulando datas:</h3>");

// Para começarmos a manipular datas no JavaScript precisamos primeiro criar uma instância
// da classe Date que é nativa do JavaScript

const dataAtual = new Date();

document.write(dataAtual);

// Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}.</p>`);

// Pegando o mês atual
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês ${mes}.</p>`);

// Pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Atualmente estamos no ano ${ano}.</p>`);

// Exibindo a data completa
document.write(`Data de hoje: ${dia}/${mes}/${ano}`);

// Adicionando dias, mes e anos a data atual
// Adcionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);

// Adicionando 3 meses a data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

// Adicionando 2 anos a data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibindo a nova data
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}</p>`);

document.write(`<p>Daqui a 3 meses será més ${dataAtual.getMonth() + 1}</p>`);
document.write(`<p>Daqui a 2 anos será ano ${dataAtual.getFullYear()}</p>`);

// ##########################################################################

// Formatação de Moedas
document.write("<h3>Manipulando moedas:</h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
// ocultando casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);

// trocando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

// Formatando para real
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}
    </p>`);

// Formatando para dólar
document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
    </p>`);

// ##########################################################################
// Formatação de Strings
document.write("<h3>Formatação de Strings:</h3>");
const nome = 'Marcello Shibata';

// Alternando String para Letras Maiúsculas
document.write(`<p>${nome.toUpperCase()}</p>`)

// Alternando Strings para Letras Minúsculas
document.write(`<p>${nome.toLowerCase()}</p>`)

// Colocando as Iniciais em letras maiúsculas
const cidade = "sete barras";
const cidadeFormatada = cidade.split(" ").map(palavra => 
    palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");

document.write(`<p>${cidadeFormatada}</p>`)

// Contando o número de caractéres (/\s/g = codigo do espaço)
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length}</p>`)