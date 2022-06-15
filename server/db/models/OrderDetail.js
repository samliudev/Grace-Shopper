const Sequelize = require("sequelize");
const db = require("../db");

const OrderDetail = db.define("orderDetail", {
  items: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
  total: {
    type: Sequelize.DECIMAL(10, 2)
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

module.exports = OrderDetail;