const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  pokemon_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://png.pngitem.com/pimgs/s/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png',
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isInt: true,
    },
  },
});

module.exports = Product;
