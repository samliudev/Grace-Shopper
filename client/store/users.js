import axios from 'axios';

//ACTION TYPES

const FETCH_USERS = 'FETCH_USERS';
const FETCH_USER = "FETCH_USER";
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';

//ACTION CREATORS

export const _fetchUser = (user) => ({
  type: FETCH_USER,
  user,
});

const _fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        users
    };
};

const _createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    };
};

const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  }
}


//THUNK CREATORS


export const fetchUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    dispatch(_fetchUser(data));
  } catch (error) {
    console.log(error);
  }
};


export const fetchUsers = () => {
    return async (dispatch) => {
        const { data: users } = await axios.get('/api/users');
        dispatch(_fetchUsers(users));
    };
};

export const createUser = (user) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/users', user);
        dispatch(_createUser(created));

    };
};


//REDUCER

export default function usersReducer(state = [], action) {
    switch (action.type) {
        case FETCH_USER:
            return action.user;
        case FETCH_USERS:
            return action.users;
        case CREATE_USER:
            return [...state, action.user];
        default:
            return state
    };
};

