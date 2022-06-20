const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  items: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
  priceAtPurchase: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
  total: {
    type: Sequelize.INTEGER,
  },
  paymentMethod: {
    type: Sequelize.INTEGER,
    validate: {
      isCreditCard: true,
    },
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Order;
