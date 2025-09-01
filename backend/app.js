const express = require('express');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());

app.use('/products', require('./routes/products'));
app.use('/stock', require('./routes/stock'));

module.exports = { app, sequelize };
