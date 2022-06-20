import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function UserProfile() {
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
      <div key={user.id}>
        <p> Username: {user.username}</p>
        <p> First Name: {user.firstName} </p>
        <p> Last Name: {user.lastName} </p>
        <p> Email: {user.email} </p>
        <p> Address: {user.address} </p>
        <p> Phone: {user.phone} </p>
        <p>
      
          Admin:
          {user.isAdmin ? (
            <Link to="/users/all"> Manage Users</Link>
          ) : (
            /* <Link to="/products/edit/1">Manage Products</Link> */
            <> No </>
          )}
          <p></p>
          <Link to={`/users/edit/${id}`}>Edit Profile</Link>
        </p>
      </div>
    </>
  );
}

export default UserProfile;
