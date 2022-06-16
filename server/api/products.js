const express = require('express');
const router = express.Router();
const {
  models: { Product },
} = require('../db');

module.exports = router;

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    console.log('PRODUCTS: ', products);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
