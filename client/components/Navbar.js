import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
"react-router-dom";
import { useParams, Route } from "react-router-dom";
import { useSelector } from 'react-redux';



const Navbar = ({ handleClick, isLoggedIn, isAdmin, user }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  let cartQuantity = cart.map(pokemon => pokemon.currentQuantity)
  // console.log('Navbar', cartQuantity)
  let total = 0
  for (let i = 0; i < cartQuantity.length; i++) {
    total += cartQuantity[i]
  }
  // console.log('NavbarTotal',total)



  return (
    <div>
      <h1>POKEMART</h1>
      <nav className="nav">
        {isLoggedIn ? (
          <div>

            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to={`/users/profile/${user}`}>Account</Link>
            <Link to= "/checkout">Cart {total}</Link>
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
            <Link to= "/checkout">Cart {total}</Link>

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
    user: state.auth.id
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
