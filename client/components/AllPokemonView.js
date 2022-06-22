import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/products';
import SinglePokemonView from './SinglePokemonView';
import { Grid } from '@material-ui/core';
import { addToCart } from '../store/cart';




const types = ['All', 'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Fairy'];

export default function AllPokemonView() {
  const [type, setType] = useState(types[0]);

  const allPokemon = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const addPokemonToCart =(pokemon) => {
   dispatch(addToCart(pokemon))
   localStorage.setItem('cart', JSON.stringify(cart))
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  const renderAllPokemon = () => (
    <div>
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
                    <button onClick={() => addPokemonToCart(pokemon)}>Add to Cart</button>
                  </Grid>
                );
              })
          : allPokemon.map((pokemon) => {
              return (
                <Grid item xs={4} key={pokemon.id}>
                  <SinglePokemonView pokemon={pokemon} />
                  <button onClick={() => addPokemonToCart(pokemon)}>Add to Cart</button>
                </Grid>
              );
            })}
      </Grid>
    </div>
  );


  return (
    <div>
      {renderAllPokemon()}
    </div>
  );
}
