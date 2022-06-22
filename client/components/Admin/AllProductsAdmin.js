import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../store/products';
import SinglePokemonView from '../SinglePokemonView';
import { Grid } from '@material-ui/core';

export default function AllProductsAdmin() {
  const allPokemon = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderAllPokemon = () => (
    <div>
      <Grid container spacing={2} align="center">
        {allPokemon.map((pokemon) => {
          return (
            <Grid item xs={4} key={pokemon.id}>
              <SinglePokemonView pokemon={pokemon} />
              <button onClick={() => deleteProduct(pokemon.id, history)}>Delete Product</button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );

  return <div>{renderAllPokemon()}</div>;
}