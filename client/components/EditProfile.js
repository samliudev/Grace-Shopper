import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, updateUser, fetchUsers } from "../store/users";
import { Link } from "react-router-dom";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const user = await this.props.fetchUser(this.props.match.params.id)
    this.setState({
      username: this.props.user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,

    });
  }

  handleChange(event) {
    const targetName = event.target.name;
    const newValue = event.target.value;
    this.setState({
      [targetName]: newValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser(this.state);
    this.setState({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    });
  }

  render() {
    return (
      <div>
        <div>
          {/* hard coded link for testing */}
          <Link to="/users/1/profile">Back To Account</Link>
          <h2 >Edit Profile</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                type="text"
              />
              <label>Email: </label>
            </div>

            <div>
              <input
                onChange={this.handleChange}
                value={this.state.firstName}
                name="firstName"
                type="text"
              />
              <label>First Name: </label>
            </div>

            <div>
              <input
                onChange={this.handleChange}
                value={this.state.lastName}
                name="lastName"
                type="text"
              />
              <label>Last Name: </label>
            </div>

            <p>
            <button type="button" onClick={this.handleSubmit}> Save Changes </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    user: state.user,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers())

  };
};

const EditProfile = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default EditProfile;
