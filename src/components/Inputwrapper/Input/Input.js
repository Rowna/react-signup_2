import React from "react";
import "./Input.css";

//function Input(props) {
const Input = (props) => {
  // const errorClass = props.hasError ? "input--has-error" : "";

  return (
    // <div className={errorClass}>
    <>
      <input 
        className="input"
        disabled={props.isInputDisabled}
        type={props.type || "text" }
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </>
    // </div>
  );
};

export default Input;
