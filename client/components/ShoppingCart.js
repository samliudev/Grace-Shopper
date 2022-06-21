import React from 'react'

const ShoppingCart = ({cart}) => {
  return(
  <>
      <h1>CART</h1>
      {cart.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.imageUrl} />
            <p> Name: {pokemon.pokemon_name} </p>
            <p> Type: {pokemon.type} </p>
            <p> Price: {pokemon.price} </p>
            <p> Description: {pokemon.description} </p>
            <p> Quantity: {pokemon.quantity} </p>
            <button onClick={() => removeFromCart(pokemon)}>Remove Item</button>
          </div>
        );
      })}
    </>
  )
}



export default ShoppingCart
