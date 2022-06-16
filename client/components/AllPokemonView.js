import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

function AllPokemonView(){
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    const fetchData = async() => {
    const response = await fetch('/api/products')
    const newData = await response.json()
    setPokemon(newData)
    }
    fetchData()
  },[])


console.log(pokemon)


  return (
    <div>
      {pokemon.map((pokemon) => {
        return(
          <div key = {pokemon.id}>
            <Link to={`/products/${pokemon.id}`}>
          <img src = {pokemon.imageUrl}/>
          </Link>
          <p> Name: {pokemon.pokemon_name} </p>
          <p> Type: {pokemon.type} </p>
          <p> Price: {pokemon.price} </p>
          <p> Description: {pokemon.description} </p>
          <p> Quantity: {pokemon.quantity} </p>
          </div>
        )
      })}
    </div>
  )
}


export default AllPokemonView
