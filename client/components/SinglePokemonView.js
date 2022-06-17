import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PAGE_POKEMON = 'pokemon';
const PAGE_CART = 'cart';


function SinglePokemonView() {
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("pokemon");
  const { id } = useParams();
  const quantitySelected = 1;
  // const quantityArr = []
  // const getQuantity = (num) => {
  //   const quantity = num
  //   let counter = 0
  //   while (counter !== quantity) {
  //     quantityArr.push(counter)
  //   }
  //   return quantityArr
  // }

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

  const addToCart = (pokemon) => {
    console.log('Pokemon Secured');
    setCart([...cart, pokemon]);
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderSinglePokemon = () => (
    <div>
      <div key={pokemon.id}>
        <img src={pokemon.imageUrl} />
        <p> Name: {pokemon.pokemon_name} </p>
        <p> Type: {pokemon.type} </p>
        <p> Price: {pokemon.price} </p>
        <p> Description: {pokemon.description} </p>
        <p> Available: {pokemon.quantity}</p>
      </div>
      Quantity:
      <select
        defaultValue={quantitySelected}
        onChange={(e) => quantitySelected(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button className="addToCart" onClick={() => addToCart(pokemon)}>
        Add to Cart
      </button>
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


  return (
    <div>
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go To Cart({cart.length})</button>
        <Link to={'/products'}>
        <button onClick={() => navigateTo(PAGE_POKEMON)}>All Pokemon</button>
        </Link>
      </header>
      {page == 'pokemon' && renderSinglePokemon()}
      {page == 'cart' && renderCart()}
    </div>
  );
}

export default SinglePokemonView;
