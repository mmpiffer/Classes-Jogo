class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
      
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      }
      
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi("Kellor", 300, "mago");
  heroi1.atacar();
  
  const heroi2 = new Heroi("Jhon", 27, "ninja");
  heroi2.atacar();
  
  const heroi3 = new Heroi("Arthur", 80, "guerreiro");
  heroi3.atacar();
  
  const heroi4 = new Heroi("Ryan", 20, "monge");
  heroi4.atacar();
  