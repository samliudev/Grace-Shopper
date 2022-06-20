const router = require('express').Router();
const Order = require('../db/models/Order')

module.exports = router;

// GET all /api/orders
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const orders = await Order.findByPk(req.params.id);
    console.log("Added to cart", orders)
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// POST /api/orders/:id
router.post('/:id', async (req, res, next) => {
  try {
    const orders = await Order.findOrCreate(req.params.id);
    console.log("Added to cart", orders)
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/:id
router.put('/:id', async (req, res, next) => {
  try {
    const orders = await Order.create(req.body);
    console.log("Added to cart", orders)
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/orders/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const orders = await Order.findByPk(req.params.id);
    await orders.destroy()
    res.json(orders);
  } catch (error) {
    next(error);
  }
});
