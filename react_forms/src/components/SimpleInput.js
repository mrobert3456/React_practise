import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.prevenDefault(); // avoid sending http request to a server
    setEnteredNameTouched(true);
    //Validation
    if (!enteredNameIsValid) {
      //setEnteredNameIsValid(false);
      return;
    }

    //setEnteredNameIsValid(true);

    console.log(enteredName);
    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
    //nameInputRef.current.value=''; //it works also, but not elegant, it is better to use States then Refs in this case
    //we directly manipulating the DOM ,so that is why is not ideal
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must be not empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
