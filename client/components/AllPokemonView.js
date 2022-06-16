import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const PAGE_POKEMON = 'pokemon'
const PAGE_CART = 'cart'

function AllPokemonView(){
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('pokemon')

useEffect(() => {
    const fetchData = async() => {
    const response = await fetch('/api/products')
    const newData = await response.json()
    setPokemon(newData)
    }
    fetchData()
  },[])

  const renderAllPokemon = () => (
      <>
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
          <button onClick = {() =>addToCart (pokemon)}>Add to Cart</button>
          </div>
        )
      })}
      </>
  )

const renderCart = () => (
    <>
    <h1>CART</h1>
      {cart.map((pokemon) => {
        return(
          <div key = {pokemon.id}>
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
      </>
  )


  const addToCart = (pokemon) =>{
    console.log('Pokemon Secured')
    setCart([...cart, pokemon]);
  };

  const navigateTo = (nextPage) =>{
    setPage(nextPage)
  }

  return (
    <div>
      <header>
        <button onClick = {() => navigateTo(PAGE_CART)}>Go To Cart({cart.length})</button>
        <button onClick = {() => navigateTo(PAGE_POKEMON)}>All Pokemon</button>
        </header>
        {page == 'pokemon' && renderAllPokemon()}
        {page == 'cart' && renderCart()}
    </div>
  )
}


export default AllPokemonView
