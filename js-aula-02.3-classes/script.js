class Carro {
  // Nome de classes devem iniciar com a primeira letra maiúscula.

  // ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");

// Acessando os atributos e métodos do objeto
document.write(`
    <p>O carro popular ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano 
    ${carroPopular.ano} e quando ele buzina ele faz ${carroPopular.buzinar()}</p>
    `);

const carroEsportivo = new Carro();
carroEsportivo.marca = "Ferrari";
carroEsportivo.modelo = "Spider";
carroEsportivo.ano = "2026";

document.write(`
    <p>O carro popular ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano 
    ${carroEsportivo.ano} e quando ele buzina ele faz ${carroEsportivo.buzinar()}</p>
    `);

// Criando uma nova instância: Carro Conversivel
const carroConversivel = new Carro();
carroConversivel.marca = "Chevrolet";
carroConversivel.modelo = "Camaro";
carroConversivel.ano = "2026";

// Adicionando um novo atributo (não previsto na classe)
carroConversivel.corNeon = "Azul";
// Adicionando um novo método (não previsto na classe)
carroConversivel.turbo = function () {
  return "Vrummm! O carro está acelerando!!!";
};

document.write(
    `<p>O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neon da cor 
    ${carroConversivel.corNeon}</p>`
)

document.write(`<p>${carroConversivel.turbo()}</p>`)