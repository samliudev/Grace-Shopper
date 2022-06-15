const Sequelize = require("sequelize");
const db = require("../db");

const OrderDetails = db.define("orderDetails", {
  items: {
    type: Sequelize.ARRAY,
    allowNull: false,
  },
  total: {
    type: Sequelize.DECIMAL(10, 2),
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

module.exports = OrderDetails;
