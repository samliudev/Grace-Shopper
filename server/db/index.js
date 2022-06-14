//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const OrderDetails = require('./models/OrderDetails')
const OrderItems = require('./models/OrderItems')
const Product = require('./models/Product')

//associations could go here!

User.hasMany(OrderDetails)
OrderDetails.belongsTo(User)

OrderDetails.belongsToMany(Product, {through: "OrderDetailsProduct"} )
Product.belongsToMany(OrderDetails, {through: "OrderDetailsProduct"} )

OrderItems.hasOne(Product)
Product.belongsTo(OrderItems)

OrderDetails.hasMany(OrderItems)
OrderItems.belongsTo(OrderDetails)

module.exports = {
  db,
  models: {
    User,
    OrderDetails,
    OrderItems,
    Product
  },
}
