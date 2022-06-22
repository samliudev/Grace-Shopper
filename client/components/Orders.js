import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [description, setDescription] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      await axios
        .get(`/api/users/${id}/orders`)
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    const fetchPokemon = async (id) => {
      await axios.get(`/api/users/${id}/orders/pokemon`).then((res) => {
        setPokemon(res.data);
      });
    };
    const fetchDesc = async (id) => {
      await axios.get(`/api/users/${id}/orders/description`).then((res) => {
        setDescription(res.data);
      });
    };
    fetchData(id);
    fetchPokemon(id);
    fetchDesc(id);
  }, []);

  const mergePokemonAndDescription = (index) => {
    let PokeArr = [];
    if (Array.isArray(pokemon[index]) && Array.isArray(pokemon[index])) {
      PokeArr = pokemon[index].map((item, i) =>
        Object.assign({}, item, description[index][i])
      );
    } else {
      console.log("Could not merge");
    }
    return PokeArr;
  };

  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <div>
              {Array.isArray(pokemon[order.id]) &&
              Array.isArray(description[order.id])
                ? mergePokemonAndDescription(order.id).map((poke) => {
                    console.log(poke);
                    return (
                      <div key={poke.id}>
                        <img src={poke.imageUrl} />
                        <p>Poke ID: {poke.id}</p>
                        <p>
                          Price:{" "}
                          {(poke.Price / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                        <p>Quantity: {poke.Quantity}</p>
                      </div>
                    );
                  })
                : "Start Making Some Orders!"}
            </div>
            <p>
              Order Total:{" "}
              {(order.total / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>

          </div>
        );
      })}
    </div>
  );
}

export default Orders;
