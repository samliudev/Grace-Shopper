const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('user', {
  pokemon_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  type: {
    type: Sequelize.ARRAY,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://png.pngitem.com/pimgs/s/46-468761_pikachu-png-transparent-image-pikachu-png-png-download.png',
  },
  price: {
    type: DECIMAL(20, 2),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Product;
