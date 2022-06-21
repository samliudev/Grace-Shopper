import React from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ManageUsers from './ManageUsers';

export default function AdminView({ isAdmin }) {
  return (
    <div>
      <AddProduct />
      {/* <EditProduct /> */}
      <ManageUsers />
    </div>
  );
}
