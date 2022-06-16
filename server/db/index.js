//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Order = require('./models/Order');
// const Order_Products = require('./models/OrderProduct')
const Product = require('./models/Product');

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: 'Order_Products' });
Product.belongsToMany(Order, { through: 'Order_Products' });

module.exports = {
  db,
  models: {
    User,
    Order,
    // Order_Products,
    Product,
  },
};
