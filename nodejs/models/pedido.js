module.exports = class Pedido {
    constructor(item, quantidade, mesa) {
        this.id = null;
        this.item = item;
        this.quantidade = quantidade;
        this.mesa = mesa;
    }
}