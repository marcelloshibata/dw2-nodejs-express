// 1.
const data = new Date();

document.write(`<p>Hoje é ${data}</p>`);
document.write(`<p>Hoje é 
    ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</p>`);

// 2.
let compraInternacional = 260.31;
document.write(`<p>Fazendo uma compra no valor de 
    ${compraInternacional.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}</p>`);

// 3.
document.write(`<p>Fazendo uma compra no Brasil, no valor de 
    ${(compraInternacional * 0.19).toLocaleString("pt", {
      style: "currency",
      currency: "BRL",
    })}</p>`);

// 4.
data.setDate(data.getDate() + 12);

document.write(`<p>A entrega do produto será feita em 
    ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</p>`);

// 5.
const nomeCliente = 'marcello shibata'
const nomeClienteFormatado = nomeCliente.split(" ").map(nome =>
    nome.charAt(0).toUpperCase() + nome.slice(1)).join(" ");

document.write(`Nome do cliente: ${nomeClienteFormatado}`)
