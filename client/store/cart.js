/**
 * ACTION TYPES
 */
const SET_CART = "SET_CART"
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADJUST_QUANTITY = "ADJUST_QUANTITY";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

/**
 * ACTION CREATORS
 */

export const setCart = (pokemonArrayCart) =>({
  type: SET_CART,
  payload: pokemonArrayCart

})

export const addToCart = (addPokemonID) => ({
  type: ADD_TO_CART,
  payload:{
    pokemon: addPokemonID
  }

});
export const removeFromCart = (removePokemonID) => ({
  type: REMOVE_FROM_CART,
  id: removePokemonID,
});
export const adjustQuantity = (pokemonID, value) => ({
  type: ADJUST_QUANTITY,
  id: pokemonID,
  quantity: value,
});
export const loadCurrentItem = (item) => ({
  type: LOAD_CURRENT_ITEM,
  item,
});

/**
 * THUNK CREATORS
 */
const INITIAL_STATE = {
  cart: [],
  currentItem: null,
};

/**
 * REDUCER
 */

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const pokemonAdded = action.payload.pokemon;
      const inCart = state.cart?.find((pokemonInCart) =>
      pokemonInCart.id === pokemonAdded.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((pokemonBasket) =>
                pokemonBasket.id === pokemonAdded.id
                ? { ...pokemonBasket, currentQuantity: pokemonBasket.currentQuantity + 1 }
                : pokemonBasket
            )
          : [...state.cart, { ...pokemonAdded, currentQuantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((pokemonRemoving) => pokemonRemoving.id !== action.id),
      };
    case ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, currentQuantity: action.quantity } : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: pokemonAdded,
      };
    case SET_CART:
      return{
        ...state,
        cart: action.payload
      }
    default:
      return state;
  }
};

export default cartReducer;
