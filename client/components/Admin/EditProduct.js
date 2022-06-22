import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchSingleProduct, deleteProduct, fetchProducts, updateProduct } from '../../store/products';

export default function EditProduct() {
  const [pokemon_name, setPokemon_name] = useState('');
  const [type, setType] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

  const allPokemon = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const id = params.id;

  console.log(id);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  const product = useSelector((state) => {
    return state.singleProduct;
  });

  useEffect(() => {
    if (product.pokemon_name) setPokemon_name(product.pokemon_name);
    if (product.type) setType(product.type);
    if (product.imageUrl) setImageUrl(product.imageUrl);
    if (product.price) setPrice(product.price);
    if (product.description) setDescription(product.description);
    if (product.quantity) setQuantity(product.quantity);
  }, [product]);

  //Potential to use this, not sure if it works when editing one field only
  // const handleChange = ({ target }) => {
  //   const { pokemon_name,  } = target;
  //   setPost({ ...post, [name]: value });
  //   console.log(post);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...product, pokemon_name, type, imageUrl, price, description, quantity }, history));
  };
  return (
    <div>
      <h2>Edit Product</h2>
      <form id="editProductForm" onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="pokemon_name" type="text" placeholder="Name" value={pokemon_name} onChange={(e) => setPokemonName(e.target.value)} />
        </label>
        <label>
          Type:
          <input name="type" type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <label>
          Image Url:
          <input name="imageUrl" type="text" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <label>
          Price:
          <input name="price" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Description:
          <input name="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input name="quantity" type="number" placeholder="Description" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() => {
          dispatch(deleteProduct(id, history));
        }}
      >
        Delete
      </button>
    </div>
  );
}
