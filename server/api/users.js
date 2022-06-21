const router = require("express").Router();
const {
  models: { User, Product },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

// GET /api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({

      // attributes: ["id", "username"],
      //Temp commented out to retrieve all users in allUserView intil Admin is setup

    });
    console.log(users);
    res.json(users);
  } catch (error) {
    next(error);
  }
});
// GET /api/user/:id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});


// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const { data: user } = await User.update(
      { firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address },

        { where: { id: req.params.id }, }
    );
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy()
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

