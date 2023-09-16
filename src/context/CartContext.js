import { cartReducer } from "../reducers";

const { createContext, useContext, useReducer } = require("react");

const cartInitialState = {
  cartList: [],
  total: Number(0),
};

const CartContext = createContext(cartInitialState);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  /* -------------------------------------------------------------------------- */
  /*                                 ADD TO CART                                */
  /* -------------------------------------------------------------------------- */
  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updateTotal = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updateTotal,
      },
    });
  }
  /* -------------------------------------------------------------------------- */
  /*                              REMOVE FROM CART                              */
  /* -------------------------------------------------------------------------- */
  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updateTotal = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updateTotal,
      },
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                 CLEAR CART                                 */
  /* -------------------------------------------------------------------------- */
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
