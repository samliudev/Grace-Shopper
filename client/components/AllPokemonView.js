import React, { useState, useEffect } from "react";
import axios from "axios";

function AllPokemonView() {
  const [pokemon, setPokemon] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/products");
      const newData = await response.json();
      setPokemon(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon.map((pokemon, index) => {
        return (
          <div key={pokemon.index}>
            <img src={pokemon.imageUrl} />
            <p> Name: {pokemon.pokemon_name} </p>
            <p> Type: {pokemon.type} </p>
            <p> Price: {pokemon.price} </p>
            <p> Description: {pokemon.description} </p>
            <p> Quantity: {pokemon.quantity} </p>
          </div>
        );
      })}
    </div>
  );
}

export default AllPokemonView;
