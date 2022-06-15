import React, {useState, useEffect} from 'react'
import pokemonArr from '../../seed';

function AllPokemonView(){
  const [pokemon, setPokemon] = useState(pokemonArr);

  return (
    <div>
      {pokemon.map((pokemon,index) => {
        return(
          <div key = {pokemon.index}>
          <p> Name: {pokemon.pokemon_name} </p>
          <p> Type: {pokemon.type} </p>
          <p> Price: {pokemon.price} </p>
          <p> Description: {pokemon.description} </p>
          <p> Quantity: {pokemon.quantity} </p>
          <img src = {pokemon.imageUrl}/>
          </div>
        )
      })}
    </div>
  )
}


export { AllPokemonView }
