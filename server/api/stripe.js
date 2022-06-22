import {useSelector} from 'react-redux'
require('dotenv').config()

const cart = useSelector((state) => state.cartReducer.cart);
const express = require('express')
const app = express()
app.use(express.json())

const stripe = require('stripe')(process.send.STRIPE_PRIVATE_KEY)

const storeItems = new Map([cart])
