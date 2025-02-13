const Cardapio = require ("../models/cardapio");
const CardapioList = require ("../models/cardapioList");

const lista = new CardapioList();

const cardapio = new Cardapio();

const cardapio1 = new Cardapio("café expresso", "5.90", "expresso")
lista.addCardapio(cardapio1);

lista.addCardapio(new Cardapio("Bolo de chocolate", "15.00", "doce"))

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

    getAllCardapio: (req, res) => {
        try {
            const cardapios = lista.getAllCardapio();
            res.status(200).json(cardapios);
        } catch (error) {
            res.status(404).json({message: 'Error ao buscar cardápio'});
        }
    },

    getCardapioById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getSongById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar cardapio por id',
                error
            });
        }
    },

    updateCardapio: (req, res) => {
        try {
            res.status(200).json(lista.updateCardapio(req.params.id, req.body));
        } catch (error) {
            res.status(404).json ('Erro ao atualizar', error)
        }
    },

    deleteCardapio: (req, res) => {
        try {
            lista.deleteCardapio(req.params.id);
            res.status(200).json({
                message: 'Musica deletada com sucesso'
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar cardapio', error);
        }
    }
};

module.exports = router;