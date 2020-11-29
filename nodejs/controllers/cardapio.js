const ItemDao = require('../daos/item');
const Item = require('../models/item');

const itemDao = new ItemDao();

exports.getCardapio = (req, res, next) => {
    res.status(200).json(itemDao.getItens());
}

exports.addItemCardapio = (req, res, next) => {
    let item = new Item(req.body.nome, req.body.valor);
    res.status(200).json(itemDao.addItem(item));
}

exports.removeItemCardapio = (req, res, next) => {
    itemDao.removeItem(req.params.id);
    res.status(200).end();
}