const router = require("express").Router();
const {
  models: { User, Product, OrderProducts, Order },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;


// GET /api/users
router.get("/",  async (req, res, next) => {
  try {
    // const user = await User.findByToken(req.headers.authorization);
    // console.log("User is", user)
    // if (user && user.isAdmin === true) {
    const users = await User.findAll({

      // attributes: ["id", "username"],
      //Temp commented out to retrieve all users in allUserView intil Admin is setup

    });
    console.log(req.user)
    res.json(users);
  // } else {
  //   const error = Error('Error, you do not have privileges required for this action');
  //   error.status = 401;
  //   throw error;
  // }
  } catch (error) {
    next(error);
  }
});

// GET /api/user/:id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// GET array of orders that belong to this user
router.get("/:id/orders", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const usersOrders = await user.getOrders();
    res.json(usersOrders);
  } catch (error) {
    next(error);
  }
});
// GET all the order descriptions for this user
router.get("/:id/orders/description", async (req, res, next) => {
  try {
    let Obj = {}
    const user = await User.findByPk(req.params.id)
    const orders = await user.getOrders()
    const ordersId = orders.map(order => order.id)

    for (let i = 0; i < ordersId.length; i++) {
      const products = await OrderProducts.findAll({
        where: {
          orderId: ordersId[i]
        }
      })
      Obj[ordersId[i]] = products
    }
    console.log(Obj)
    res.json(Obj);
  } catch (error) {
    next(error);
  }
});
// GET all the order descriptions for this useryy
router.get("/:id/orders/pokemon", async (req, res, next) => {
  try {
    let Obj = {}
    const user = await User.findByPk(req.params.id)
    const orders = await user.getOrders()
    const ordersId = orders.map(order => order.id)

    for (let i = 0; i < ordersId.length; i++) {
      const products = await OrderProducts.findAll({
        where: {
          orderId: ordersId[i]
        }
      })
      const pokeId = (products.map(product => product.productId))
      const pokemon = await Product.findAll({
        where: {
          id: [...pokeId]
        },
      })
      Obj[ordersId[i]] = pokemon

    }
    console.log(Obj)
    res.json(Obj);
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


