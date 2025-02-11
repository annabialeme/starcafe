const Cardapio = require ("../models/cardapio");
const CardapioList = require ("../models/cardapioList");

const lista = new CardapioList();

const cardapio1 = new Song();
lista.addCardapio(cardapio1);

lista.addCardapio(new Cardapio("café expresso", "5.90", "expresso"));

const router = {
    addCardapio: (req, res) => {
        try {
            const {nome, preco, categoria} = req.body;
            if (!nome || !preco || !categoria) {
                throw new Error ("Preencha todos os campos!");
            }
            const cardapio = new Cardapio (nome, preco, categoria)
            lista.status(200).json({message: "Criado com sucesso", cardapio});
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar cardápio",
                error: error.message,
            });
        }
    },

  
}