import React, { useState, useEffect } from "react";
import { Card, Button} from "@material-ui/core";
import axios from "axios";
import { useParams, Route } from "react-router-dom";
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

  console.log("params", id);

  return (
    <>
    <Card>
      <div key={user.id}>
        <p> Username: {user.username}</p>
        <p> First Name: {user.firstName} </p>
        <p> Last Name: {user.lastName} </p>
        <p> Email: {user.email} </p>
        <p> Address: {user.address} </p>
        <p> phoneNumber: {user.phoneNumber} </p>
        <p>
          {" "}
          Admin:
          {user.isAdmin ? (
            // <Link to="/users/all"> Manage Users</Link>
            <>Yes</>
          ) : (
            /* <Link to="/products/edit/1">Manage Products</Link> */
            <> No </>
          )}
        </p>
        <div>
          <Link to={`/users/edit/${id}`}>Edit Profile</Link>
        </div>
        <div>
          <Link to={`${id}/orders`}>Order History</Link>
        </div>
        <div></div>
      </div>
      </Card>
    </>
  );
}

export default User;
