import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AllUsers from '../AllUsers';

export default function ManageUsers() {
  const dispatch = useDispatch();
  const history = useHistory();


  return (
    <div>
      <h2>Manage Users</h2>
    <AllUsers />
    </div>
  );
}
