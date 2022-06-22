import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ManageUsers from './ManageUsers';
import AllProductsAdmin from './AllProductsAdmin';

export default function AdminView({ isAdmin }) {
  return (
    <div>
      <h2>Administrator View</h2>

      <AllProductsAdmin />
      <h3>
        <Link to="/admin/products">Products</Link>
      </h3>
      <h3>
        <Link to="/admin/products/add">Add Product</Link>
      </h3>
      <h3>
        <Link to="/admin/products/edit/:id">Edit Product</Link>
      </h3>
      <h3><ManageUsers /></h3>
    </div>
  );
}
