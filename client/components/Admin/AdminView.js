import React from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

export default function AdminView({ isAdmin }) {
  return (
    <div>
      <AddProduct />
      {/* <EditProduct /> */}
    </div>
  );
}
