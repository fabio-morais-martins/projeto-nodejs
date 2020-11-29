const MesaDao = require('../daos/mesa');

const mesaDao = new MesaDao();

exports.getMesas = (req, res, next) => {
    res.status(200).json(mesaDao.getMesas());
}

exports.getMesa = (req, res, next) => {
    res.status(200).json(mesaDao.getMesa(req.params.id));
}

exports.addMesa = (req, res, next) => {
    res.status(200).json(mesaDao.addMesa(req.body.numero));
}