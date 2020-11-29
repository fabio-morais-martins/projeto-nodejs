const express = require('express');
const cardapioController = require('../controllers/cardapio');
const router = express.Router();

router.get('/', cardapioController.getCardapio);
router.post('/', cardapioController.addItemCardapio);
router.delete('/:id', cardapioController.removeItemCardapio);

exports.routes = router;