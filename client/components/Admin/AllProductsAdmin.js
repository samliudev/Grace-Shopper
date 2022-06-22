import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../../store/products";
import SinglePokemonView from "../SinglePokemonView";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
          // console.log(allPokemon.history);
          return (
            <Grid item xs={4} key={pokemon.id}>
              <SinglePokemonView pokemon={pokemon} />
              <button
                onClick={() => dispatch(deleteProduct(pokemon.id))}
              >
                Delete Product
              </button>
              <Link to={`/admin/products/edit/${pokemon.id}`}>Edit</Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );

  return <div>{renderAllPokemon()}</div>;
}
