import React from "react";
// import SignUp from "../SignUp";
import Input from "../Inputwrapper/Input/Input";
import useFormInput from "./useFormInput";

function useInputInfos(props) {
  // useFormInput() selbst-erstellter Hook
  const [firstNameValue, firstNameIsValid, onFirstNameChange] =
    useFormInput("[\\a-zA-Zء-ي]{2}");
  const [lastNameValue, lastNameIsValid, onLastNameChange] =
    useFormInput("[\\a-zA-Zء-ي]{2}");
  const [emailValue, emailIsValid, onEmailChange] = useFormInput(
    "^[\\a-zA-Z0-9._-]+@[\\a-zA-Z0-9.-]+.[\\a-zA-Z]$"
  ); // lea@gmx.de
  const [streetValue, streetIsValid, onStreetChange] =
    useFormInput("[\\a-zA-Zء-ي]{3}");
  const [hnrValue, hnrIsValid, onHnrChange] = useFormInput("^[\\d][\\w]*$");
  const [plzValue, plzIsValid, onPlzChange] = useFormInput("[\\a-zA-Z0-9]{3}");
  const [countryValue, countryIsValid, onCountryChange] = useFormInput(
    "[\\0-9a-zA-Zء-ي]{3}"
  );

  const [formIsValid, setFormIsValid] = useState(false);
  // onFirstNameChange

  const inputInfos = [
    {
      // id: 1,
      type: "text",
      isInputDisabled: isInputDisabled,
      name: "firstname",
      value: firstNameValue,
      placeholder: "Vorname",
      onChangeHandler: function (event) {
        onFirstNameChange(event.target.value);
      },
      // hasError: firstNameIsValid === false,
      gridPosition: "firstname-input",
      validateMessage: "Vorname ist erforderlich",
      isValid: firstNameIsValid,
    },
    {
      // id: 2,
      type: "text",
      isInputDisabled: isInputDisabled,
      name: "lastname",
      value: lastNameValue,
      placeholder: "Nachname",
      onChangeHandler: function (event) {
        onLastNameChange(event.target.value);
      },
      // hasError: lastNameIsValid === false,
      gridPosition: "lastname-input",
      validateMessage: "Nachname ist erforderlich",
      isValid: lastNameIsValid,
    },

    {
      // id: 3,
      type: "email",
      isInputDisabled: isInputDisabled,
      name: "email",
      value: emailValue,
      placeholder: "E-Mail-Adresse",
      onChangeHandler: function (event) {
        onEmailChange(event.target.value);
      },
      // hasError: lastNameIsValid === false,
      gridPosition: "email-input",
      validateMessage: "Email ist erforderlich",
      isValid: emailIsValid,
    },
    {
      // id: 4,
      type: "text",
      isInputDisabled: isInputDisabled,
      name: "street",
      value: streetValue,
      placeholder: "Straße",
      onChangeHandler: function (event) {
        onStreetChange(event.target.value);
      },
      //  hasError: streetIsValid === false,
      gridPosition: "street-input",
      validateMessage: "Straße ist erforderlich",
      isValid: streetIsValid,
    },
    {
      // id: 5,
      type: "text" || "number",
      isInputDisabled: isInputDisabled,
      name: "hnr",
      value: hnrValue,
      placeholder: "Hsnr.",
      onChangeHandler: function (event) {
        onHnrChange(event.target.value);
      },
      // hasError: hnrIsValid === false,
      gridPosition: "hnr-input",
      validateMessage: " Hnr. ist erforderlich",
      isValid: hnrIsValid,
    },
    {
      // id: 6,
      type: "text" || "number",
      isInputDisabled: isInputDisabled,
      name: "postcode",
      value: plzValue,
      placeholder: "PLZ",
      onChangeHandler: function (event) {
        onPlzChange(event.target.value);
      },
      // hasError: plzIsValid === false,
      gridPosition: "postcode-input",
      validateMessage: "PLZ ist erforderlich",
      isValid: plzIsValid,
    },
    {
      // id: 7,
      type: "text",
      isInputDisabled: isInputDisabled,
      name: "country",
      value: countryValue,
      placeholder: "Ort",
      onChangeHandler: function (event) {
        onCountryChange(event.target.value);
      },
      // hasError: countryIsValid === false,
      gridPosition: "country-input",
      validateMessage: "Ort ist erforderlich",
      isValid: countryIsValid,
    },
  ];

  return {
    firstNameValue,
    firstNameIsValid,
    onFirstNameChange,
  };
}

export default useInputInfos;
