import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // with useEffect we can add animation the a component as well
  // when we change the amount(add or remove) items, then we add the classes.bump css to the component
  // the animation duration is 300 ms, so after that we want to remove the classes.bump
      // so when the btnIsHighlighted is false
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) { //if there is no item in the cart
      return;
    }
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => { //after 300 ms we set the btnIsHighlighted to false
      setBtnIsHighlighted(false);
    }, 300);

    return () => { // this is useful because, when we add items repeatedly, then the animation should start over
                      //so we have to clear the timer
      clearTimeout(timer);
    }; //cleanup
  }, [items]); // this useEffect should execute when the cart items is changed!!


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
