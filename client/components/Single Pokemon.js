import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SinglePokemonView() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      await axios
        .get(`/api/products/${id}`)
        .then((res) => {
          setPokemon(res.data);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    fetchData(id);
  }, [id]);

  return (
    <div>
      <div key={pokemon.id}>
        <img src={pokemon.imageUrl} />
        <p> Name: {pokemon.pokemon_name} </p>
        <p> Type: {pokemon.type} </p>
        <p> Price: {pokemon.price} </p>
        <p> Description: {pokemon.description} </p>
        <p> Quantity: {pokemon.quantity} </p>
      </div>
    </div>
  );
}

export default SinglePokemonView;
