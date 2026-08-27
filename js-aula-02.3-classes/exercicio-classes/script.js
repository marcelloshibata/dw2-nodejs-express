class Heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }

  correr() {
    return `Correndo a ${this.velocidade}`;
  }
  andar() {
    return `Andando a ${this.velocidade / 2}`;
  }
  atacar() {
    return `O herói ataca!! Desfere um golpe de ${this.forca} de dano`;
  }
  defender() {
    return `O herói defende!! Mitigando ${this.forca / 3} de dano`;
  }
}

// Instanciando objetos representando os heróis
const homemAranha = new Heroi('Homem-Aranha', 300, 100, 400);
homemAranha.teia = 1;
homemAranha.sentidoAranha = () => {
    return `Detectando perigo!`
}

const superman = new Heroi('Superman', 1500, 1800, 2000);
superman.podeVoar = 1;
superman.visaoCalor = () => {
    return `Usando visão de calor!`;
}

const batman = new Heroi('Batman', 500, 400, 250);
batman.esconder = 1;
batman.investigar = () => {
    return `Investigando um crime do Coringa!`;
}

document.writeln(`<p>O ${homemAranha.nome} está em ação! Ele está ${homemAranha.correr()}, e ele encontra o Dr. Octopus! ${homemAranha.atacar()}</p>`);