const initialState = {
  cart: []
};

const phoneStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if item exists in cart
      const index = state.cart.findIndex(
        cartItem => cartItem.id === action.cartItem.id
      );
      if (index !== -1) {
        // Item Found -> quantity increase
        state.cart[index].quantity += 1;
      } else {
        // Not Found => Push new item to cart
        state.cart.push(action.cartItem);
      }

      state.cart = [...state.cart];
      return { ...state };
    }
    case "CHANGE_QUANTITY": {
        let cart = [...state.cart];
        let index = cart.findIndex(cartItem => cartItem.id === action.id);
        if (index !== -1) {
            if (cart[index].quantity <= 1 && action.number === -1) {
                alert('must be at least 1!');
                return {...state};
                
            }
            cart[index].quantity += action.number;
        }
        state.cart = [...state.cart];
        return { ...state };
    }
    case "REMOVE_ITEM": {
        return {
            cart: state.cart.filter(cartItem => cartItem.id !== action.id)
        }
    }

    default:
      return state;
  }
};

export default phoneStoreReducer;
