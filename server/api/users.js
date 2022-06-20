const router = require("express").Router();
const {
  models: { User, Product },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    console.log(users);
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// Get specific user
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Get array of orders that belong to this user
router.get("/:id/orders", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const usersOrders = await user.getOrders();
    res.json(usersOrders);
  } catch (error) {
    next(error);
  }
});

// Get array of orders that belong to this user
router.get("/:id/orders/pokemon", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const usersOrders = await user.getOrders();

    let orderProducts = await usersOrders.map((a) => a.items);

    // turns orderProducts from an array of arrays to a flat array
    orderProducts = [].concat.apply([], orderProducts);
    const products = await Product.findAll({
      where: {
        id: {
          [Op.in]: [...orderProducts],
        },
      },
    });

    res.json(products);
  } catch (error) {
    next(error);
  }
});
