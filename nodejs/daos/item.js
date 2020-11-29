const itens = require('../data/itens');

module.exports = class ItemDao {    
    
    constructor() {
    }

    getItem(id) {
        return itens.filter(item => item.id == id)[0];
    }

    getItens() {
        return itens;
    }

    addItem(item) {
        item.numero = Math.max(...itens.map(item => item.id), 0) + 1;
        itens.push(item);
        return item;
    }

    removeItem(id) {
        itens.splice(itens.indexOf(this.getItem(id)), 1);
    }

}

