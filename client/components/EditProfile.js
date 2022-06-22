import React, { useState, useEffect } from "react";
import { FormControl, Card, Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/user";
import { updateUser } from "../store/user";
import { useParams } from 'react-router-dom';

const emptyUser = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phoneNumber: "",
};

const EditProfile = () => {
  const dispatch = useDispatch();
  let userStore = useSelector((state) => state.users);
  const { id } = useParams();
  const [user, setUser] = useState(userStore);
  console.log("Getting store", userStore);

  console.log("user log", user);
  const onChange = (event) => {
    const newUser = { ...user };
    newUser[event.target.id] = event.target.value;
    setUser(newUser);
  };
  const handleSubmit = () => {
    if (user) {
      dispatch(updateUser(id, user));
    }
  };

  useEffect(() => {
    setUser(userStore);
  }, [userStore]);

  return (
    <div>
      <Card>
        <h2>Edit Profile</h2>
        <FormControl style={{ padding: "1rem" }}>
          <TextField
            onChange={onChange}
            value={user.username}
            id={"username"}
            label={"Username"}
          />
          <TextField
            onChange={onChange}
            value={user.firstName}
            id={"firstName"}
            label={"First Name"}
          />
          <TextField
            onChange={onChange}
            value={user.lastName}
            id={"lastName"}
            label={"Last Name"}
          />
          <TextField
            onChange={onChange}
            value={user.email}
            id={"email"}
            label={"Email"}
          />
          <TextField
            onChange={onChange}
            value={user.address}
            id={"address"}
            label={"Address"}
          />
          <TextField
            type={"number"}
            onChange={onChange}
            value={user.phoneNumber}
            id={"phoneNumber"}
            label={"Phone Number"}
          />

          <Button onClick={handleSubmit}>Save Changes</Button>
        </FormControl>
      </Card>
    </div>
  );
};

export default EditProfile;
