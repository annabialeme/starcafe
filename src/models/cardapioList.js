class CardapioList {
    constructor() {
        this.cardapios = [];
    }

    addCardapio(cardapio) {
        this.cardapios.push(cardapio);
    }

    getAllCardapio() {
        return this.cardapios;
    }

    getSongById(id) {
        const cardapio = this.cardapios.find(cardapio => cardapio.id == id);
        if (!cardapio) {
            throw new Error("Cardápio não encontrado");
        }
        return cardapio;
    }

    updateCardapio(id, updateData) {
        const cardapio = this.getCardapioById(id);
        Object.assign(cardapio, updateData);
        return cardapio;
    }

    deleteCardapio(id) {
        this.cardapios = this.cardapios.filter(cardapio => cardapio.id != id);

    }

    getTotalCardapio() {
        return this.cardapios.length;
    }
}

module.exports = CardapioList;