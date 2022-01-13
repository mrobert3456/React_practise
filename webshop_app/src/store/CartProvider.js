import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; //updated item amount

    const existingCartItemIndex = state.items.findIndex(
      //returns an index if the item with the given id exists
      (item) => item.id === action.item.id
    ); // finds the idx of the corresponding item

    const existingCartItem = state.items[existingCartItemIndex]; // gets the corresponding item

    let updatedItems;

    if (existingCartItem) {
      // if the selected item is already existing in the cart
      //then it should update its amount, and price
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // if the selected item is not in the  cart
      updatedItems = state.items.concat(action.item);
      //concat returns a new array
      //which is important, because we want to update the state in an immutable way
      //so we will create a new state object
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price; //updates amount
    let updatedItems;
    if (existingItem.amount === 1) {
      // remove completely from the cart
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //decrease the amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (Citem) => {
    dispatchCartAction({ type: "ADD", item: Citem });
  };
  const removeItemFromCartHandler = (Cid) => {
    dispatchCartAction({ type: "REMOVE", id: Cid });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart : clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
