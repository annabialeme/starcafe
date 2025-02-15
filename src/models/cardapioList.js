class CardapioList {
    constructor() {
        this.cardapios = [];
    }

    addCardapio(cardapio) {
        this.cardapios.push(cardapio);
    }

    getAllCardapio() {
        return this.cardapio;
    }

    getSongById(id) {
        const cardapio = this.cardapio.find(cardapio => cardapio.id == id);
        if (!cardapio) {
            throw new Error("Cardápio não encontrado");
        }
        return cardapio;
    }

    updateCardapio(id, updateData) {
        const cardapio = getCardapioById(id);
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