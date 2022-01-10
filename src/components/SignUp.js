import React, { useState, useEffect } from "react";
import FormBox from "./FormBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import InputWrapper from "./Inputwrapper/Inputwrapper";
import Input from "./Inputwrapper/Input/Input";
// import Error from "./Error/Error";
import Button from "./Button/Button";
import "./SignUp.css";
import useFormInput from "./helper/useFormInput";
import axios from "axios"
const SignUp = (props) => {
  // useFormInput() selbst-erstellter Hook
  const [firstNameValue, firstNameIsValid, onFirstNameChange] = useFormInput("[\\w-]{3}");
  const [lastNameValue, lastNameIsValid, onLastNameChange] = useFormInput("[\\w-]{3}");
  const [emailValue, emailIsValid, onEmailChange] = useFormInput("^[\\a-zA-Z0-9._-]+@[\\a-zA-Z0-9.-]+.[\\a-zA-Z]$"); // lea@gmx.de
  const [streetValue, streetIsValid, onStreetChange] = useFormInput("[\\w-]{3}");
  const [hnrValue, hnrIsValid, onHnrChange] = useFormInput("^[\\d][\\w]*$");
  const [plzValue, plzIsValid, onPlzChange] = useFormInput("[\\d-]{1}");
  const [countryValue, countryIsValid, onCountryChange] = useFormInput("[\\w-]{3}");

  const [formIsValid, setFormIsValid] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [error, setError] = useState(false);

  // für setFormIsValid
  useEffect(() => {
    axios.get("https://randomuser.me/api/").then(res => res.data).then((data) => {
      onEmailChange({target: {value: data.results[0].email}})
      setImageUrl(data.results[0].picture.medium);
    })

    setFormIsValid(
      firstNameIsValid &&
        lastNameIsValid &&
        emailIsValid &&
        streetIsValid &&
        hnrIsValid &&
        plzIsValid &&
        countryIsValid
    );
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    streetIsValid,
    hnrIsValid,
    plzIsValid,
    countryIsValid,
  ]);

  // Für btn-ChnageHandler
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(
      onFirstNameChange,
      onLastNameChange,
      onEmailChange,
      onHnrChange,
      onPlzChange, 
      onCountryChange
    );
  };

  /* 
  useEffect(() => {
    setError(

    )
  }, [!formIsValid]);
  */

  /* 
  const errorHandler = () => {
    if (firstNameIsValid) {
      setError("Error");
    }
  }
  console.log(errorHandler)
*/


  return (
    <FormBox>
      <ProfileImage url={imageUrl}/>
      <div className="input-container">
        <InputWrapper gridPosition="firstname-input">
          <Input
            type="text"
            name="firstname"
            value={firstNameValue}
            placeholder="Vorname"
            onChangeHandler={onFirstNameChange}
            // hasError={errors.firstname}

          />
          {formIsValid === false && <p>Vorname ist erforderlich</p> }

          {/* <Error errorsMessage={errors} name="firstname" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="lastname-input">
          <Input
            type="text"
            name="lastname"
            value={lastNameValue}
            placeholder="Nachname"
            onChangeHandler={onLastNameChange}
            // hasError={errors.lastname}
          />
          {/* <Error errorsMessage={errors} name="lastname" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="email-input">
          <Input
            type="email"
            name="email"
            value={emailValue}
            placeholder="E-Mail-Adresse"
            onChangeHandler={onEmailChange}
            // hasError={errors.email}
          />
          {/* <Error errorsMessage={errors} name="email" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="street-input">
          <Input
            type="text"
            name="street"
            value={streetValue}
            placeholder="Straße"
            onChangeHandler={onStreetChange}
            // hasError={errors.street}
          />
          {/* <Error errorsMessage={errors} name="street" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="hnr-input">
          <Input
            type="text"
            name="hnr"
            value={hnrValue}
            placeholder="Hsnr."
            onChangeHandler={onHnrChange}
            // hasError={errors.hnr}
          />
          {/* <Error errorsMessage={errors} name="hnr" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="postcode-input">
          <Input
            type="number"
            name="postcode"
            value={plzValue}
            placeholder="PLZ"
            onChangeHandler={onPlzChange}
            // hasError={errors.postcode}
          />
          {/* <Error errorsMessage={errors} name="postcode" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="country-input">
          <Input 
            name="country"
            type="text"
            value={countryValue}
            placeholder="Ort"
            onChangeHandler={onCountryChange}
            // hasError={errors.country}
          />
          {/* <Error errorsMessage={errors} name="country" /> */}
        </InputWrapper>
      </div>

      <Button btnTitle={"User generieren"} onSubmit={submitHandler} className="btn" disabled={!formIsValid} />
    </FormBox>
  );
};

export default SignUp;
