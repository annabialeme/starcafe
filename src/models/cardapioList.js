class cardapioList {
    constructor() {
        this.cardapio = [];
    }

    addCardapio(cardapio) {
        this.cardapio.push(cardapio);
    }

    getAllCardapio() {
        return this.cardapio;
    }

    getSongById(id) {
        const cardapio = this.cardapio.find((cardapio) => cardapio.id == id);
        if (!cardapio) {
            throw new Error("Cardápio não encontrado");
        }
        return cardapio;
    }

    updateCardapio(id, updateData) {
        const cardapio = this.getSongById(id);
        Object.assign(this.getSongById, updateData);
        return cardapio;
    }

    deleteCardapio(id) {
        this.cardapio = this.cardapio.filter((cardapio) => cardapio.id != id);

    }

    getTotalCardapio() {
        return this.cardapio.length;
    }
}

module.exports = cardapioList;