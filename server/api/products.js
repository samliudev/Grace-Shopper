const router = require('express').Router();
const Product = require('../db/models/Product');
const User = require('../db/models/User');

module.exports = router;

// GET ALL PRODUCTS /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// GET SINGLE PRODUCT /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// ADD PRODUCT
router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token);
    if (user && user.isAdmin === true) {
      const newProduct = await Product.create(req.body.product);
      res.send(newProduct);
    } else {
      const error = Error('Error, you do not have privileges required for this action');
      error.status = 401;
      throw error;
    }
  } catch (err) {
    next(err);
  }
});

// // UPDATE PRODUCT
// router.put('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByToken(req.body.token);
//     const product = await Product.findOne({
//       where: { id: req.params.id },
//     });
//     if (user && user.isAdmin === true) {
//       product.update(req.body);
//       res.send(product);
//     } else {
//       const error = Error('Error, you do not have privileges required for this action');
//       error.status = 401;
//       throw error;
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE PRODUCT
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    if (user && user.isAdmin === true) {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.sendStatus(204);
    } else {
      const error = Error('Error, you do not have privileges required for this action');
      error.status = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});
