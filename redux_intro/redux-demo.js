// the file will be executed with node js, so library import looks different
const redux = require("redux"); //import redux

const counterReducer = (state = { counter: 0 }, action) => {
  //param: old state, dispatched action
  //returns a new state object
  //must be pure function = new side effects, so same input must return the same output every time
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState(); //returns tha latest state snapshot after it was updated
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
