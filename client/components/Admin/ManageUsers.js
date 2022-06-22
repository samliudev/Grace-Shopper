import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AllUsers from "../AllUsers";
import { fetchUsers } from "../../store/users";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const newData = await response.json();
      setUsers(newData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <p> Usersname: {users.username}</p>
            <p> First Name: {users.firstName} </p>
            <p> Last Name: {users.lastName} </p>
            <p> Email: {users.email} </p>
            <p> Address: {users.address} </p>
            <p> Phone: {users.phoneNumber} </p>
          </div>
        );
      })}
    </div>
  );
}
