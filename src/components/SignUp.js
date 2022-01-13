import React, { useState, useEffect } from "react";
import FormBox from "./FormBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import InputWrapper from "./Inputwrapper/Inputwrapper";
import Input from "./Inputwrapper/Input/Input";
// import Error from "./Error/Error";
import Button from "./Button/Button";
import "./SignUp.css";
import useFormInput from "./helper/useFormInput";
import axios from "axios";

const SignUp = (props) => {
  // useFormInput() selbst-erstellter Hook
  const [firstNameValue, firstNameIsValid, onFirstNameChange] = useFormInput("[\\a-zA-Zء-ي]{2}");
  const [lastNameValue, lastNameIsValid, onLastNameChange] = useFormInput("[\\a-zA-Zء-ي]{2}");
  const [emailValue, emailIsValid, onEmailChange] = useFormInput("^[\\a-zA-Z0-9._-]+@[\\a-zA-Z0-9.-]+.[\\a-zA-Z]$"); // lea@gmx.de
  const [streetValue, streetIsValid, onStreetChange] = useFormInput("[\\a-zA-Zء-ي]{3}");
  const [hnrValue, hnrIsValid, onHnrChange] = useFormInput("^[\\d][\\w]*$");
  const [plzValue, plzIsValid, onPlzChange] = useFormInput("[\\d-]{1}");
  const [countryValue, countryIsValid, onCountryChange] = useFormInput("[\\a-zA-Zء-ي]{3}");

  const [formIsValid, setFormIsValid] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [istAngelegt, setIstAngelegt] = useState(false);
  const [istBearbeitetClicked, setIsBearbeitetClicked] = useState(false);

  // für RandomUser
  const randomUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => res.data)
      .then((data) => {
        console.log(data.results[0]);
        onEmailChange(data.results[0].email);
        onFirstNameChange(data.results[0].name.first);
        onLastNameChange(data.results[0].name.last);
        onStreetChange(data.results[0].location.street.name);
        onHnrChange(data.results[0].location.street.number);
        onPlzChange(data.results[0].location.postcode);
        onCountryChange(data.results[0].location.country);
        setImageUrl(data.results[0].picture.medium);
      });
  };

  // für setFormIsValid
  useEffect(() => {
    // console.log(formIsValid)
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

  const clickGenerierenHandler = (event) => {
    event.preventDefault();
    randomUser();
  };

  const clickAnlegenHandler = (e) => {
    e.preventDefault();
    const data = {
      firstNameValue,
      lastNameValue,
      emailValue,
      streetValue,
      hnrValue,
      plzValue,
      countryValue,
    };

    // if (Object.keys(data).length <=7) {
    //   setIstAngelegt(true); 
    //   console.log(setIstAngelegt);
    //   // console.log(object)
    // }
    localStorage.setItem("UserData", JSON.stringify(data));
    setIstAngelegt(true);
    console.log(data)
    //to get the Object from localStorage
    //console.log(JSON.parse(localStorage.getItem("userData")))
  };

  const clickBearbeitenHandler = (e) => {
    e.preventDefault();
    setIsBearbeitetClicked(true);
    // const extractedData = "";
    const extractedData = JSON.parse(localStorage.getItem("userData"));

    console.log(extractedData); 
  };

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem(firstNameValue, JSON.stringify(firstNameValue));

  // }, [firstNameValue]);

  // console.log(firstNameValue)

  return (
    <FormBox>
      <ProfileImage url={imageUrl} />
      <div className="input-container">
        <InputWrapper gridPosition="firstname-input">
          <Input
            type="text"
            name="firstname"
            value={firstNameValue}
            placeholder="Vorname"
            onChangeHandler={(event) => onFirstNameChange(event.target.value)}
            hasError={!firstNameIsValid}
          />
          {!firstNameIsValid && <p>Vorname ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="firstname" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="lastname-input">
          <Input
            type="text"
            name="lastname"
            value={lastNameValue}
            placeholder="Nachname"
            onChangeHandler={(event) => onLastNameChange(event.target.value)}
            hasError={!lastNameIsValid}
            // hasError={errors.lastname}
          />
          {!lastNameIsValid && <p>Vorname ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="lastname" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="email-input">
          <Input
            type="email"
            name="email"
            value={emailValue}
            placeholder="E-Mail-Adresse"
            onChangeHandler={(event) => onEmailChange(event.target.value)}
            hasError={!emailIsValid}
          />
          {!emailIsValid && <p>Email ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="email" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="street-input">
          <Input
            type="text"
            name="street"
            value={streetValue}
            placeholder="Straße"
            onChangeHandler={(event) => onStreetChange(event.target.value)}
            hasError={!streetIsValid}
          />
          {!streetIsValid && <p>Straße ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="street" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="hnr-input">
          <Input
            type="text"
            name="hnr"
            value={hnrValue}
            placeholder="Hsnr."
            onChangeHandler={(event) => onHnrChange(event.target.value)}
            hasError={!hnrIsValid}
          />
          {!hnrIsValid && <p> Hnr. ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="hnr" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="postcode-input">
          <Input
            type="number"
            name="postcode"
            value={plzValue}
            placeholder="PLZ"
            onChangeHandler={(event) => onPlzChange(event.target.value)}
            hasError={!plzIsValid}
          />
          {!plzIsValid && <p>PLZ ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="postcode" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="country-input">
          <Input
            name="country"
            type="text"
            value={countryValue}
            placeholder="Ort"
            onChangeHandler={(event) => onCountryChange(event.target.value)}
            hasError={!countryIsValid}
          />
          {!countryIsValid && <p>Ort ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="country" /> */}
        </InputWrapper>
      </div>

      <div className="btn_container">
        { istAngelegt ? 
        ( <Button btnTitle={"Bearbeiten"} onClickHandler={clickBearbeitenHandler} className="btn edit-user" /> ) : 
        ( <Button btnTitle={"User generieren"} onClickHandler={clickGenerierenHandler} className="btn generate-user" /> )
        }

        { istBearbeitetClicked ? 
        ( <Button btnTitle={"Speichern"} onClickHandler={clickAnlegenHandler} className="btn create-user" />) ? 
        ( <Button btnTitle={"Abbrechen"} className="btn exit-btn" />) : 
          ( <Button btnTitle={"User anlegen"} onClickHandler={clickAnlegenHandler} className="btn create-user" /> ) : 
          ( <Button btnTitle={"User anlegen"} onClickHandler={clickAnlegenHandler} className="btn create-user" disabled={!formIsValid} /> )
        }

      </div>
    </FormBox>
  );
};
export default SignUp;
