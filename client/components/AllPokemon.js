import React from 'react'

const AllPokemon = ({pokemon,type}) => (
  <>
    {type !== 'All'
      ? pokemon
          .filter((pokemon) => pokemon.type === type)
          .map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <Link to={`/products/${pokemon.id}`}>
                  <img src={pokemon.imageUrl} />
                </Link>
                <p> Name: {pokemon.pokemon_name} </p>
                <p> Type: {pokemon.type} </p>
                <p> Price: {pokemon.price} </p>
                <p> Description: {pokemon.description} </p>
                <p> Quantity: {pokemon.quantity} </p>
                <button onClick={() => addToCart(pokemon)}>Add to Cart</button>
              </div>
            );
          })
      : pokemon.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <Link to={`/products/${pokemon.id}`}>
                <img src={pokemon.imageUrl} />
              </Link>
              <p> Name: {pokemon.pokemon_name} </p>
              <p> Type: {pokemon.type} </p>
              <p> Price: {pokemon.price} </p>
              <p> Description: {pokemon.description} </p>
              <p> Quantity: {pokemon.quantity} </p>
              <button onClick={() => addToCart(pokemon)}>Add to Cart</button>
            </div>
          );
        })}
  </>
);

export default AllPokemon
