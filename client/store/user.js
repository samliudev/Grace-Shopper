import axios from "axios";

const FETCH_USER = "FETCH_USER";
const UPDATE_USER = "UPDATE_USER";

export const _fetchUser = (user) => ({
  type: FETCH_USER,
  user,
});

const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

export const fetchUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    dispatch(_fetchUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (id, user) => {
  console.log(user);

  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/users/${id}`,
      JSON.stringify(user),
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(_updateUser(updated));
  };
};

export default function userReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return action.order;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
