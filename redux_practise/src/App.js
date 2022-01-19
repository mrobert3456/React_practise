import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { createDispatchHook, useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
//import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); //sets up a subscription to redux

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     // dispatch(
  //     //   uiActions.showNotification({
  //     //     status: "pending",
  //     //     title: "Sending...",
  //     //     message: "Sending cart data!",
  //     //   })
  //     // );
  //     // const response = await fetch(
  //     //   "https://react-http-ba397-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //     //   {
  //     //     method: "PUT", //PUT overrides the existing cart with the incoming data
  //     //     body: JSON.stringify(cart),
  //     //   }
  //     // );
  //     // if (!response.ok) {
  //     //   throw new Error("Sending cart data failed.");
  //     // }
  //     //const responseData = await response.json();

  //     // dispatch(
  //     //   uiActions.showNotification({
  //     //     status: "success",
  //     //     title: "Success!",
  //     //     message: "Sent cart data successfully!",
  //     //   })
  //     // );
  //     if (isInitial) {
  //       isInitial=false;
  //       return;
  //     }
  //     sendCartData().catch((error) => {
  //       //sendCartData returns a promise so we can use Catch here
  //       // dispatch(
  //       //   uiActions.showNotification({
  //       //     status: "error",
  //       //     title: "Error!",
  //       //     message: "Sending cart data failed!",
  //       //   })
  //       // );
  //     });
  //   };
  // }, [cart, dispatch]); //dispatch is never changed, it is ensured by react

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
      //we pass action creator thunk, which returns an action
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
