import React, { useState, useEffect } from "react";
import FormBox from "./FormBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import InputWrapper from "./Inputwrapper/InputWrapper";
import Input from "./Inputwrapper/Input/Input";
// import Error from "./Error/Error";
import Button from "./Button/Button";
import "./SignUp.css";
import useFormInput from "./helper/useFormInput";
import axios from "axios";
import useInputInfos from "./helper/useInputInfos";

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
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [istBearbeitetClicked, setIsBearbeitetClicked] = useState(false);

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
    // console.log(setImageUrl)
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
    /* 
    axios
      .get(
        "http://localhost:5000/api?firstName=" +
          firstNameValue +
          "&lastName=" +
          lastNameValue
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data.message);
      });
    */
    // if (Object.keys(data).length <=7) {
    //   setIstAngelegt(true);
    //   console.log(setIstAngelegt);
    //   // console.log(object)
    // }
    localStorage.setItem("userData", JSON.stringify(data));
    setIstAngelegt(true);
    console.log(data);
    setIsInputDisabled(true);
    //to get the Object from localStorage
    //console.log(JSON.parse(localStorage.getItem("userData")))
  };

  const clickBearbeitenHandler = (e) => {
    e.preventDefault();
    setIsBearbeitetClicked(true);
    // const extractedData = "";
    setIsInputDisabled(false);
    const extractedData = JSON.parse(localStorage.getItem("userData"));

    console.log(extractedData);
  };

 /* 
  // const fileSelectedHandler = (e) => {
  // setImageUrl(e.target.files[0]);
  // console.log(setImageUrl);
  // };

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem(firstNameValue, JSON.stringify(firstNameValue));

  // }, [firstNameValue]);

  // console.log(firstNameValue)
*/
 
/* */
// const inputInfos = [
//   { 
//     id:1, 
//     type:"text", 
//     isInputDisabled: props.isInputDisabled, 
//     name:"firstname", 
//     value: props.firstNameValue, 
//     placeholder:"Vorname", 
//     onChangeHandler: function(event) { onFirstNameChange(event.target.value)}, 
//     hasError: firstNameIsValid == false, 
//   },
//   { 
//     id:2, 
//     type:"text", 
//     isInputDisabled: props.isInputDisabled, 
//     name:"lastname", 
//     value: props.lastNameValue, 
//     placeholder:"Nachname", 
//     onChangeHandler: function(event) { onLastNameChange(event.target.value)}, 
//     hasError: lastNameIsValid == false, 
//   },
//   { 
//     id: 3,
//     type:"email", 
//     isInputDisabled: props.isInputDisabled, 
//     name:"email", 
//     value: props.emailValue, 
//     placeholder:"E-Mail-Adresse", 
//     onChangeHandler: function(event) { onEmailChange(event.target.value)}, 
//     hasError: lastNameIsValid == false,
//   },
//   {

//   },

// ]



// const inputs = inputInfos.map(function(input) {
//   return <Input
//     key={input.id}
//     type={input.type}
//     isInputDisabled={input.isInputDisabled}
//     name={input.name}
//     value={input.value}
//     placeholder={input.placeholder}
//     onChangeHandler={input.onChangeHandler}
//     hasError={input.hasError}
//   />
// });


return (
    <FormBox>
      <ProfileImage url={imageUrl} /> 
      <div className="input-container">
        <InputWrapper gridPosition="firstname-input">
        {/* <useInputInfos /> */}
        {useInputInfos.inputs[0]}
          {!firstNameIsValid && <p>Vorname ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="firstname" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="lastname-input">
          {/* {useInputInfos.inputs ? useInputInfos.inputs[1] : useInputInfos.inputs} */}
          {!lastNameIsValid && <p>Vorname ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="lastname" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="email-input">
        {/* {useInputInfos.inputs ? useInputInfos.inputs[2] : useInputInfos.inputs} */}
          {/* <Input
            type="email"
            isInputDisabled={isInputDisabled}
            name="email"
            value={emailValue}
            placeholder="E-Mail-Adresse"
            onChangeHandler={(event) => onEmailChange(event.target.value)}
            hasError={!emailIsValid}
          /> */}
          {!emailIsValid && <p>Email ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="email" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="street-input">
          {/* <Input
            type="text"
            isInputDisabled={isInputDisabled}
            name="street"
            value={streetValue}
            placeholder="Straße"
            onChangeHandler={(event) => onStreetChange(event.target.value)}
            hasError={!streetIsValid}
          /> */}
          {!streetIsValid && <p>Straße ist erforderlich</p>}
          {/* <Error errorsMessage={errors} name="street" /> */}
        </InputWrapper>

        <InputWrapper gridPosition="hnr-input">
          <Input
            type="text"
            isInputDisabled={isInputDisabled}
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
            isInputDisabled={isInputDisabled}
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
            isInputDisabled={isInputDisabled}
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
        {istAngelegt ? (
          <>
            {istBearbeitetClicked ? (
              <Button btnTitle={"Speichern"} className="btn save-user" />
            ) : (
              <Button
                btnTitle={"Bearbeiten"}
                onClickHandler={clickBearbeitenHandler}
                className="btn edit-user"
              />
            )}
            <Button btnTitle={"Abbrechen"} className="btn exit-btn" />
          </>
        ) : (
          <>
            <Button
              btnTitle={"User generieren"}
              onClickHandler={clickGenerierenHandler}
              className="btn generate-user"
            />
            <Button
              btnTitle={"User anlegen"}
              onClickHandler={clickAnlegenHandler}
              className="btn create-user"
              disabled={!formIsValid}
            />
          </>
        )}

        {/* {isTrue ? <></> : isTrue2 ? <></>: <></>} */}
      </div>
    </FormBox>
  );
};

export default SignUp;
