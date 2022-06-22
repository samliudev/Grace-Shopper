import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../store/cart';



const ShoppingCart = () => {
  const cart = useSelector((state) => state.cartReducer.cart)
  const dispatch = useDispatch()


  const increment = (pokemon) =>{
    const max = pokemon.quantity
    const newQuantity = pokemon.currentQuantity + 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if (newQuantity > max){
      dispatch(adjustQuantity(pokemon.id, max))}

    else {
      dispatch(adjustQuantity(pokemon.id, newQuantity))}
      }

  const decrement = (pokemon) =>{
    const min = 1
    const newQuantity = pokemon.currentQuantity - 1;
    localStorage.setItem('cart', JSON.stringify(cart))
    if (newQuantity < min){
      dispatch(adjustQuantity(pokemon.id, min))}
    else {
      dispatch(adjustQuantity(pokemon.id, newQuantity))}
      }

  const removePokemonFromCart = async(pokemon) => {
    await dispatch(removeFromCart(pokemon.id))
    await localStorage.setItem('cart', JSON.stringify(cart))
  }



  let cartQuantity = cart.map(pokemon => pokemon.currentQuantity)
  let cartPrice = cart.map(pokemon => pokemon.price)


  let subtotal = 0;
  for(let i = 0; i < cartQuantity.length; i++){
    subtotal += cartQuantity[i] * cartPrice[i]
  }
  console.log(subtotal)

  return(
  <>
      <h1>CART</h1>
      {cart.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.imageUrl} />
            <p> Name: {pokemon.pokemon_name} </p>
            <p> Type: {pokemon.type} </p>
            <p> Price: ${pokemon.price/100} </p>
            <p> Description: {pokemon.description} </p>
            <p> Quantity: {pokemon.currentQuantity} </p>
            <button onClick={() => removePokemonFromCart(pokemon)}>Remove Item</button>
            <button onClick={() => decrement(pokemon)}>-</button>
            <button onClick={() => increment(pokemon)}>+</button>
          </div>
        );
      })}
      <h1>SubTotal</h1>
      <h3>${(subtotal/100)}</h3>
    </>
  )
}



export default ShoppingCart
