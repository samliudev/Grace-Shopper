import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username, isLoggedIn, user } = props;


  return (
    <div>

      {isLoggedIn ? <h3>Welcome, {username}</h3> : <h3>Temp Home Page</h3>}
      <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/caffcf8b-5211-4e7d-8c59-428017d1b35e/deq1fkf-2c2e4013-66c8-4117-8599-2af224184127.jpg/v1/fill/w_1280,h_720,q_75,strp/surprised_pikachu_face_by_mileyinfamous_deq1fkf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvY2FmZmNmOGItNTIxMS00ZTdkLThjNTktNDI4MDE3ZDFiMzVlXC9kZXExZmtmLTJjMmU0MDEzLTY2YzgtNDExNy04NTk5LTJhZjIyNDE4NDEyNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BxRu5E0KXWaGMlbpJvOwbi_8eWwzeEPFBNrAucWOYtw'}/>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    isLoggedIn: !!state.auth.id,
    user: state.auth.id
  };
};

export default connect(mapState)(Home);
