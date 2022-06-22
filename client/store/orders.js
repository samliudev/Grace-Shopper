import axios from "axios";

//ACTION TYPES
const FETCH_ORDER = "FETCH_ORDER";
const FETCH_USER_ORDERS = "FETCH_USER_ORDERS";
const UPDATE_ORDER = "UPDATE_ORDER";
const DELETE_ORDER = "DELETE_ORDER";

//ACTION CREATORS
export const _fetchOrder = (order) => ({
  type: FETCH_ORDER,
  order,
});

export const _fetchUserOrders = (order) => ({
  type: FETCH_USER_ORDERS,
  order,
});


export const _updateOrder = (order) => ({
  type: UPDATE_ORDER,
  order,
});

export const _deleteOrder = (order) => ({
  type: DELETE_ORDER,
  order,
});

//THUNK CREATORS
export const fetchOrder = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/orders");
    dispatch(_fetchOrder(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserOrders = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}/orders`);
    dispatch(_fetchUserOrders(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = (item) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/orders`, item);
    console.log("Adding to Order", item);
    dispatch(_updateOrder(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    dispatch(_deleteOrder(data));
  } catch (error) {
    console.log(error);
  }
};

//REDUCER
export default function ordersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ORDER:
      return action.order;
    case FETCH_USER_ORDERS:
      return action.order;
    case UPDATE_ORDER:
      return [...state, action.order];
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.order.id);
    default:
      return state;
  }
}
