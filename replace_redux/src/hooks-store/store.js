import { useState, useEffect } from "react";
let globalState = {};

let listeners = [];

let actions = {};

//shouldListen means that, only listen for changes when state changes
//not listen when dispatching actions
    //this would mean that only re-render components, which state is being updated
    //with this we avoid unnecesarry re-rendering
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      //updates the states of the subscribed components
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState); //every component, which uses this custom hook will get its own setState function
    }
    return () => {
      //cleanup function, which will run when the component unmounts
      //we want to remove the corresponding setState function from the listeners array
      if (shouldListen) {
        listeners = listeners.filter((li) => li != setState);
      }
    };
  }, [shouldListen]); // we could add the setState as a dependency, but react ensures that this is never changes
  //as its coming from useState

  return [globalState, dispatch]; // returns a state, and a dispatch function like useReducer
};

export const initStore = (useActions, initialState) => {
  //for setting actions ,and state
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...useActions };
};
