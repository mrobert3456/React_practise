import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  //in javascript functions are closures
  // in this example it means, that the toggleParagraphHandler will enclose the variables inside it
      // so it means that it will store the variable values which is coming from the outside
      // here: allowToggle
      // and the next time it's executed, the stored variable will be used, which is not latest state
      // so it has to be a dependecy attached to it

      // Again, we depend on the previous state, so we need to have a function executed
       // when we call setShowParahraph,
       //because, React does not change state instantly, instead React schedules a state update
        // which is usually fast, but with function calling, we can ensure that the order of the state
        //changing is correct!! and we get the latest state
            // or we can use UseEffect for this matter as well
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
