import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      await axios
        .get(`/api/users/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.err(err);
        });
    };
    fetchData(id);
  }, [id]);


  return (
    <div>
      <p>Username: {user.username}</p>
    <Link to={`${id}/orders`}>Order History</Link>

    </div>
  );
}
export default User;
