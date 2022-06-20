import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products';
import SinglePokemonView from './SinglePokemonView';
import { Grid } from '@material-ui/core';

const PAGE_POKEMON = 'pokemon';
const PAGE_CART = 'cart';

const types = ['All', 'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Fairy'];

export default function AllPokemonView() {
  const [type, setType] = useState(types[0]);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('pokemon');

  const allPokemon = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderAllPokemon = () => (
    <div>
      <nav>
        <button onClick={() => navigateTo(PAGE_CART)}>Go To Cart({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_POKEMON)}>All Pokemon</button>
      </nav>
      <select onChange={(e) => setType(e.target.value)} defaultValue={type}>
        {types.map((type, idx) => (
          <option key={idx}>{type}</option>
        ))}
      </select>
      <Grid container spacing={2} align="center">
        {type !== 'All'
          ? allPokemon
              .filter((pokemon) => pokemon.type.includes(type))
              .map((pokemon) => {
                return (
                  <Grid item xs={4} key={pokemon.id}>
                    <SinglePokemonView pokemon={pokemon} />
                    <button onClick={() => addToCart(pokemon)}>Add to Cart</button>
                  </Grid>
                );
              })
          : allPokemon.map((pokemon) => {
              return (
                <Grid item xs={4} key={pokemon.id}>
                  <SinglePokemonView pokemon={pokemon} />
                  <button onClick={() => addToCart(pokemon)}>Add to Cart</button>
                </Grid>
              );
            })}
      </Grid>
    </div>
  );

  const renderCart = () => (
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
          </div>
        );
      })}
    </>
  );

  const addToCart = (pokemon) => {
    console.log('Pokemon Secured');
    setCart([...cart, pokemon]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div>
      {page == 'pokemon' && renderAllPokemon()}
      {page == 'cart' && renderCart()}
    </div>
  );
}
