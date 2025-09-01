const express = require('express');
const router = express.Router();
const { Product, StockItem } = require('../models');

router.get('/', async (req, res) => {
  const products = await Product.findAll({ include: StockItem });
  res.json(products);
});

router.post('/', async (req, res) => {
  try {
    const { name, price, quantity = 0 } = req.body;
    const product = await Product.create({ name, price });
    await StockItem.create({ productId: product.id, quantity });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id, { include: StockItem });
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
});

router.put('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id, { include: StockItem });
  if (!product) return res.status(404).json({ error: 'Not found' });
  const { name, price, quantity } = req.body;
  await product.update({ name, price });
  if (quantity !== undefined) {
    const stock = await product.getStockItem();
    await stock.update({ quantity });
  }
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  await product.destroy();
  res.status(204).send();
});

module.exports = router;
