const express = require('express');
const router = express.Router();
const { StockItem, Product } = require('../models');

router.get('/', async (req, res) => {
  const items = await StockItem.findAll({ include: Product });
  res.json(items);
});

router.post('/', async (req, res) => {
  try {
    const item = await StockItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const item = await StockItem.findByPk(req.params.id, { include: Product });
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await StockItem.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  const item = await StockItem.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.status(204).send();
});

module.exports = router;
