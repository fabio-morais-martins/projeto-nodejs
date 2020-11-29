const express = require('express');
const mesaController = require('../controllers/mesa');
const router = express.Router();

router.get('/', mesaController.getMesas);
router.get('/:id', mesaController.getMesa);
router.post('/', mesaController.addMesa);

exports.routes = router;