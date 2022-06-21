/**
 * ACTION TYPES
 */
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADJUST_QUANTITY = "ADJUST_QUANTITY";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM"


/**
 * ACTION CREATORS
 */
export const addtoCart = (addPokemonID) => ({
  type: ADD_TO_CART,
  id: addPokemonID
})
export const removeFromCart = (removePokemonID) => ({
  type: REMOVE_FROM_CART,
  id: removePokemonID
})
export const adjustQuantity = (pokemonID,value) => ({
  type: ADJUST_QUANTITY,
  id: pokemonID,
  quantity: value
})
export const loadCurrentItem = (item) => ({
  type: LOAD_CURRENT_ITEM,
  item
})


/**
 * THUNK CREATORS
 */
const INITIAL_STATE = {
  product:[],
  cart: [],
  currentItem: null
}


/**
 * REDUCER
 */
const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TO_CART:
      const item = state.product.find(pokemon => pokemon.id === id);
      const inCart = state.cart.find((item) => item.id === id ? true:false);
      return {
      ...state,
      cart: inCart
      ? state.cart.map((item) =>
        item.id === id
          ? {...item, quantity: item.quantity + 1}: item): [...state.cart, {...item, quantity:1 }]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.filter(item => item.id !== id)
      }
    case ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => item.id === id ? {...item, quantity: quantity}: item)
      }
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: item
      }
    default:
    return state
  }
}

export default cartReducer




