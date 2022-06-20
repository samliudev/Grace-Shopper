import axios from 'axios';
import history from 'history';

//ACTION TYPES
const SET_PRODUCTS = 'SET_PRODUCTS';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//ACTION CREATORS
export const _setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const _updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

export const _createProduct = (product) => ({
  type: CREATE_PRODUCT,
  product,
});

export const _deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

//THUNK CREATORS
export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/products');
    dispatch(_setProducts(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (product, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/products/${product.id}`, product);
    dispatch(_updateProduct(updated));
    history.push('/products');
  };
};

export const createProduct = (product, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/products', product);
    dispatch(_createProduct(created));
    history.push('/products');
  };
};

export const deleteProduct = (id, history) => {
  return async (dispatch) => {
    const { data: product } = await axios.delete(`/api/product/${id}`);
    dispatch(_deleteProduct(product));
    history.push('/products');
  };
};

//REDUCER
export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case UPDATE_PRODUCT:
      return state.map((product) => (product.id === action.product.id ? action.product : product));
    case CREATE_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
