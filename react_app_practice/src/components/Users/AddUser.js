import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {

  //refs can connect javascript to html element
  //no longer need useState to updated state
  //if we access values with ref, then we talk about uncontrolled components
        //because its internal state is not controlled by react
        //useState approach is a controlled component approach
  //so the states will not be updated in every keystroke, but only when we submit the form
  //it is an object, which has a 'current' prop, that holds the actual value, that ref is connected with 
  const nameInputRef= useRef();
  const ageInputRef= useRef();

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
   // console.log(nameInputRef.current.value);
   const enteredName = nameInputRef.current.value;
   const eneteredUserAge=ageInputRef.current.value;
   //validation check
    if (enteredName.trim().length === 0 || eneteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+eneteredUserAge < 1) {
      //+ sign means number conversion
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enteredName, eneteredUserAge);

    //rarely use refs to manipulate the DOM
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef} //it will be a real DOM element later
          ></input>

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
