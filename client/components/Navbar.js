import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
"react-router-dom";
import { useParams, Route } from "react-router-dom";


const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => {
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
  console.log("user nav", user);
  console.log("id log", id)
  console.log("params nav", id);

  // const Nav = ({ handleClick, isLoggedIn, isAdmin }) => (

  
  return (
    <div>
      <h1>POKEMART</h1>
      <nav className="nav">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to={`/users/profile/${id}`}>Account</Link>
            {/* route still needs to be conneced to users id */}
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            {isAdmin ? <Link to="/admin"> Admin View</Link> : null}
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
