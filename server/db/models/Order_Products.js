const Sequelize = require("sequelize");
const db = require("../db");

const OrderProducts = db.define("orderProducts", {
  Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
    },
  },
  Price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
    },
  },
});

module.exports = OrderProducts;
