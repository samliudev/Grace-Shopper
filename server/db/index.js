//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const OrderDetail = require('./models/OrderDetail')
const OrderItem = require('./models/OrderItem')
const Product = require('./models/Product')

//associations could go here!

User.hasMany(OrderDetail)
OrderDetail.belongsTo(User)

OrderDetail.belongsToMany(Product, {through: "OrderDetailProduct"} )
Product.belongsToMany(OrderDetail, {through: "OrderDetailProduct"} )

OrderItem.hasOne(Product)
Product.belongsTo(OrderItem)

OrderDetail.hasMany(OrderItem)
OrderItem.belongsTo(OrderDetail)

module.exports = {
  db,
  models: {
    User,
    OrderDetail,
    OrderItem,
    Product
  },
}
