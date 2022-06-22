import React, { useState, useEffect } from "react";
import { FormControl, Card, Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct, updateProduct } from "../../store/products";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const dispatch = useDispatch();
  let productStore = useSelector((state) => state.products);
  const { id } = useParams();
  const [product, setProduct] = useState(productStore);
  console.log("Getting product store", productStore);

  console.log("product log", product);
  const onChange = (event) => {
    const newproduct = { ...product };
    newproduct[event.target.id] = event.target.value;
    setProduct(newproduct);
  };
  const handleSubmit = () => {
    if (product) {
      dispatch(updateProduct(id, product));
    }
  };

  useEffect(() => {
    setProduct(productStore);
  }, [productStore]);

  return (
    <div>
      <Card>
        <h2>Edit Profile</h2>
        <FormControl style={{ padding: "1rem" }}>
          <TextField
            onChange={onChange}
            value={product.pokemon_name}
            id={"pokemon_name"}
            label={"Name"}
          />
          <TextField
            onChange={onChange}
            value={product.type}
            id={"type"}
            label={"Type"}
          />
          <TextField
            onChange={onChange}
            value={product.price}
            id={"price"}
            label={"Price"}
          />
          <TextField
            onChange={onChange}
            value={product.quantity}
            id={"quantity"}
            label={"Quantity"}
          />
          <TextField
            onChange={onChange}
            value={product.description}
            id={"description"}
            label={"Description"}
          />
          <TextField
            onChange={onChange}
            value={product.imageUrl}
            id={"imageUrl"}
            label={"Image Url"}
          />

          <Button onClick={handleSubmit}>Save Changes</Button>
        </FormControl>
      </Card>
    </div>
  );
};

export default EditProduct;

// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { fetchSingleProduct, deleteProduct, fetchProducts, updateProduct } from '../../store/products';

// export default function EditProduct() {
//   const [pokemon_name, setPokemon_name] = useState('');
//   const [type, setType] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState('');
//   const [quantity, setQuantity] = useState(0);

//   const allPokemon = useSelector((state) => state.products);

//   const dispatch = useDispatch();
//   const params = useParams();
//   const history = useHistory();

//   const id = params.id;

//   console.log(id);

//   useEffect(() => {
//     dispatch(fetchSingleProduct(id));
//   }, []);

//   const product = useSelector((state) => {
//     return state.singleProduct;
//   });

//   useEffect(() => {
//     if (product.pokemon_name) setPokemon_name(product.pokemon_name);
//     if (product.type) setType(product.type);
//     if (product.imageUrl) setImageUrl(product.imageUrl);
//     if (product.price) setPrice(product.price);
//     if (product.description) setDescription(product.description);
//     if (product.quantity) setQuantity(product.quantity);
//   }, [product]);

//   //Potential to use this, not sure if it works when editing one field only
//   // const handleChange = ({ target }) => {
//   //   const { pokemon_name,  } = target;
//   //   setPost({ ...post, [name]: value });
//   //   console.log(post);
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(updateProduct({ ...product, pokemon_name, type, imageUrl, price, description, quantity }, history));
//   };
//   return (
//     <div>
//       <h2>Edit Product</h2>
//       <form id="editProductForm" onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input name="pokemon_name" type="text" placeholder="Name" value={pokemon_name} onChange={(e) => setPokemonName(e.target.value)} />
//         </label>
//         <label>
//           Type:
//           <input name="type" type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
//         </label>
//         <label>
//           Image Url:
//           <input name="imageUrl" type="text" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
//         </label>
//         <label>
//           Price:
//           <input name="price" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
//         </label>
//         <label>
//           Description:
//           <input name="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <label>
//           Quantity:
//           <input name="quantity" type="number" placeholder="Description" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <button
//         onClick={() => {
//           dispatch(deleteProduct(id, history));
//         }}
//       >
//         Delete
//       </button>
//     </div>
//   );
// }
