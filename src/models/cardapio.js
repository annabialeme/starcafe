const { v4: uuid4 } = require("uuid");

class Cardapio {
    constructor(id, nome, preco, categoria) {
        this.id = uuid4();
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}

module.exports = Cardapio;

