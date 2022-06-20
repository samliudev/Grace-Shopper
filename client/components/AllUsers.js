import { useState, useEffect } from "react";
import * as React from "react";


function AllUsers() {
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
    <>
      {users.map((users) => {
        console.log("users", users)
        return (
          <div key={users.id}>
      <p> Usersname: {users.username}</p>
      <p> First Name: {users.firstName} </p>
      <p> Last Name: {users.lastName} </p>
      <p> Email: {users.email} </p>
      <p> Address: {users.address} </p>
      <p> Phone: {users.phone} </p>
            <button onClick={() => editUser(users)}>Edit User</button>
          </div>
        );
      })}
    </>
  );
}

export default AllUsers;

