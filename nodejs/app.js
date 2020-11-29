const express = require('express');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home');
const cardapioRoute = require('./routes/cardapio');
const mesaRoute = require('./routes/mesa');

const app = express();



app.use(bodyParser.json());
app.use('/', homeRoute.routes);
app.use('/cardapio', cardapioRoute.routes);
app.use('/mesa', mesaRoute.routes);

app.listen(3000);