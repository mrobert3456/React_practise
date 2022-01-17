import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  //useSelector can retrieve one slice of state property
  // and it also subscribe to the store automatically, so this component will recieve the latest state
  //whenever the store changes
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
