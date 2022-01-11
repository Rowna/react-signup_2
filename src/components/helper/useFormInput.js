import { useState, useEffect } from "react";

// diese Hook muss ein Array aus drei Werten zurückgeben:
    // value ist für firstNameValue
    // isValid ist für firstNameIsValid
    // changeHandler() ist für onFirstNameChange
const useFormInput = (regex) => {
  const [value, setValue] = useState(""); // Value Sammler
  const [isValid, setIsValid] = useState(); // Value Prüfer


  const changeHandler = (value) => {  // changeHandler() für den value und setValue
    setValue(value);
    console.log(value)
  };

  // validate()
  const validate = () => {
    setIsValid(new RegExp(regex).test(value));
    // console.log(isValid);
  };

  // inline-Callback fn validate()
  useEffect(() => {
    validate();
    // IMMER wenn value sich ändert oder upgedated wird, dann wird es validate() upgedated
  }, [value]);

  return [value, isValid, changeHandler];
};

export default useFormInput;
