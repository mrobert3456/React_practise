import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const todos =[
    new Todo("learn react"),
    new Todo("learn typescript")
  ];
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;