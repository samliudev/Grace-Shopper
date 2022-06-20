import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchOrderProducts } from "../store/products";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [pokemon, setPokemon] = useState([]);
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
      await axios
        .get(`/api/users/${id}/orders/pokemon`)
        .then((res) => {
          setPokemon(res.data);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    fetchData(id);
  }, []);

  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <div>
              {order.items.map((item) => {
                if (pokemon.length) {
                  for (let i = 0; i < pokemon.length; i++) {
                    if (pokemon[i].id === item) {
                      let index = order.items.indexOf(item)
                      return (
                        <div key={pokemon[i].id}>
                          <img src={pokemon[i].imageUrl} />
                          <p>Poke ID: {pokemon[i].id}</p>
                          <p>

                            Price:{" "}
                            {(order.priceAtPurchase[index] / 100).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </p>
                        </div>
                      );
                    }
                  }
                }
              })}
            </div>
            <p>
              Order Total:{" "}
              {(order.total / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p>UserID: {order.userId}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
