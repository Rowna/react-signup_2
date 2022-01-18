import React from "react";
// import SignUp from "../SignUp";
import Input from "../Inputwrapper/Input/Input";
import useFormInput from "./useFormInput";


function useInputInfos(props) {
    // onFirstNameChange

  const inputInfos = [
    {
      id: 1,
      type: "text",
      isInputDisabled: props.isInputDisabled,
      name: "firstname",
      value: props.firstNameValue,
      placeholder: "Vorname",
      onChangeHandler: function (event) {
        useFormInput.onFirstNameChange(event.target.value);
      },
      hasError: useFormInput.firstNameIsValid === false,
    },
    {
      id: 2,
      type: "text",
      isInputDisabled: props.isInputDisabled,
      name: "lastname",
      value: props.lastNameValue,
      placeholder: "Nachname",
      onChangeHandler: function (event) {
        useFormInput.onLastNameChange(event.target.value);
      },
      hasError: useFormInput.lastNameIsValid === false,
    },
    {
      id: 3,
      type: "email",
      isInputDisabled: props.isInputDisabled,
      name: "email",
      value: props.emailValue,
      placeholder: "E-Mail-Adresse",
      onChangeHandler: function (event) {
        useFormInput.onEmailChange(event.target.value);
      },
      hasError: useFormInput.lastNameIsValid === false,
    },
    {
      id: 4,
      type: "text",
      isInputDisabled: props.isInputDisabled,
      name: "street",
      value: props.streetValue,
      placeholder: "Straße",
      onChangeHandler: function (event) {
        useFormInput.onStreetChange(event.target.value);
      },
      hasError: useFormInput.streetIsValid === false,
    },
    {

    },

  ];


  const inputs = inputInfos.map(function (input) {
    return (
      <Input
        key={input.id}
        type={input.type}
        isInputDisabled={input.isInputDisabled}
        name={input.name}
        value={input.value}
        placeholder={input.placeholder}
        onChangeHandler={input.onChangeHandler}
        hasError={input.hasError}
      />
    );
  });

  return <div>{inputs}</div>;
}

export default useInputInfos;
