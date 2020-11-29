const mesas = require('../data/mesa');
const Mesa = require('../models/mesa');

module.exports = class MesaDao {

    constructor() {}

    getMesas() {
        return mesas;
    }

    getMesa(id) {
        return mesas.filter(mesa => mesa.id == id)[0];
    }

    addMesa(numero) {
        let mesa = new Mesa(numero);
        mesa.id = Math.max(...mesas.map(m => m.id), 0);
        mesas.push(mesa);
        return mesa;
    }

}