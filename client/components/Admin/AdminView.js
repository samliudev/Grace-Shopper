import React from 'react';
import AddProduct from './AddProduct';
import ManageUsers from './ManageUsers';

export default function AdminView() {
  return (
    <div>
      <AddProduct />
      <ManageUsers />
    </div>
  );
}
