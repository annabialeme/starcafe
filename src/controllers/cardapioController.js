const Cardapio = require ("../models/Cardapio");
const CardapioList = require ("../models/CardapioList");

const lista = new CardapioList();

const cardapio1 = new Cardapio("café expresso", "5.90", "expresso")
lista.addCardapio(cardapio1)

lista.addCardapio(new Cardapio("Bolo de chocolate", "15.00", "doce"))

const cardapioController = {
   /* addCardapio: (req, res) => {
        try {
            const {nome, preco, categoria} = req.body;
            if (!nome || !preco || !categoria) {
                throw new Error ("Preencha todos os campos!");
            }
            const cardapio = new Cardapio (nome, preco, categoria);
            lista.addCardapio(cardapio);


            res.status(200).json({message: "Criado com sucesso", cardapio});
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar cardápio",
                error: error.message,
            });
        }
    },
    */

    getAllCardapio: (req, res) => {
        try {
            const cardapios = lista.getAllCardapio();
            res.status(200).json(cardapios);
        } catch (error) {
            res.status(404).json({ message: 'Error ao buscar cardápio', error: error.message });
        }
    },

    /*
    getCardapioById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getSongById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar cardapio por id",
                error: error.message,
            });
        }
    },

    updateCardapio: (req, res) => {
        try {
            res.status(200).json(lista.updateCardapio(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteCardapio: (req, res) => {
        try {
            const cardapioId = req.params.id;
            lista.deleteCardapio(cardapioId);
            res.status(200).json({
                message: "Cardapio deletado com sucesso",
                cardapioId,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar cardapio",
                error: error.message,
            });
        }
    },

    */
};

module.exports = cardapioController;