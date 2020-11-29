const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({'status': 200, 'message': 'Bem vindo a aplicação'});
})

router.get('/hello', (req, res, next) => {
    res.status(200).json({'mensagem': 'Hello World!'});
})

exports.routes = router;