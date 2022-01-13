import { useState, useEffect } from "react";

// diese Hook muss ein Array aus drei Elemente zurückgeben:
    // value ist für firstNameValue
    // isValid ist für firstNameIsValid
    // changeHandler() ist für onFirstNameChange
const useFormInput = (regex) => {
  const [value, setValue] = useState(""); 
  const [isValid, setIsValid] = useState(true); 

  const changeHandler = (value) => {  
    setValue(value);
    // console.log(value)

  };

  const validate = () => {
    setIsValid(new RegExp(regex).test(value));
    // console.log(isValid);
  };

  // inline-Callback fn validate()
  useEffect(() => {
    value && validate();
    // IMMER wenn value sich ändert oder upgedated wird, dann wird es validate() upgedated
  }, [value]);

  // als Elemente in Array zurückgegeben
  return [value, isValid, changeHandler];
};

export default useFormInput;
