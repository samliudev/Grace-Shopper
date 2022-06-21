
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import AllPokemonView from "./components/AllPokemonView";
import SinglePokemonView from "./components/SinglePokemonView";
import User from "./components/User";
import EditProfile from "./components/EditProfile";
import AllUsers from "./components/AllUsers";
import AdminView from './components/Admin/AdminView';
import Orders from './components/Orders';




/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;
    const token = window.localStorage.getItem('token');


    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            {/* <Redirect to="/home" /> */}
            <Route path="/home" component={Home} />
            <Route path="/" exact component={Login} />
            <Route path="/products/:id(\d+)" component={SinglePokemonView} />
            <Route path="/products" component={AllPokemonView} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/users/profile/:id" component={User} />
            <Route path="/users/edit/:id" component={EditProfile} />
            <Route path="/users/all" component={AllUsers} />
            <Route path="/adminView" exact>
              {!isAdmin ? <Redirect to="/" /> : <AdminView />}
              </Route>
          </Switch>
        ) : (
          <Switch>

             <Route path="/home" component={Home} />
            <Route path='/' exact component={ Login } />
              <Route path="/products/:id(\d+)" component= {SinglePokemonView} />
              <Route path="/users/:id(\d+)/orders" component= {Orders} />
              <Route path="/users/:id(\d+)" component= {User} />
            <Route path="/products" component= {AllPokemonView} />
            <Route path="/orders" component= {Orders} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,

    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
