import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';
// Re-evaulation happens, when the context, state, or props of a component changes
//if a component is re-evaulated, then all of its child components re-avaulated as well
 // this can cause heavy computations, if the child component is not changed in any way
 // to prevent that, we can use React.memo in a component export line, to re-evaulate only,
    //when the props changed
function App() {
  const [listTitle, setListTitle] = useState('My List');

  // the functions are object as well, so in every re-evaulation, this function object
    //will be stored in a new place in the memory. But with that, the previous one and the new one
    //never be equal, however It's contents are the same
    // So even with React.memo(), the button will be always re-evaulated
  // to prevent this, we have to use useCallBack
    // which will store the new function obj at the same memory place, where the previous one stored
    // so if the two function obj has the same content, then it will be equal, and it will be not re-evaulated

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []); // it also has an array of dependecies,  [] -> means that never change

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  // useMemo stores data, like useCallBack with functions
  // useMemo could be useful, if there are some heavy computations related to the stored data
   // like sorting, because we dont want to sort again an array if its not changed
   // we also have to use UseMemo in to component, we pass the data on, and we have to
   // store the data, after the heavy computations is done on that, like sorting

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
