import React, { useState, useEffect } from "react";
import FormBox from "./FormBox";
import ProfileImage from "./ProfileImage/ProfileImage";
import InputWrapper from "./Inputwrapper/InputWrapper";
import Input from "./Inputwrapper/Input/Input";
// import Error from "./Error/Error";
import Button from "./Button/Button";
import "./SignUp.css";
import useFormInput from "./helper/useFormInput";
// import useUploadImage from "./helper/useUploadImage";
import axios from "axios";
// import InputEdit from "./Inputwrapper/Input/InputEdit";
// import useInputInfos from "./helper/useInputInfos";

const SignUp = (props) => {
  // aus einer externen Datei die Daten lesen
  // const {
  //   firstNameValue,
  //   firstNameIsValid,
  //   onFirstNameChange,
  // } = useInputInfos();

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
  // const [imageUrl, setImageUrl] = useUploadImage("");
  const [imageUrl, setImageUrl] = useState("");

  const [istAngelegt, setIstAngelegt] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [istGenerierenClicked, setGenerierenClicked] = useState(false);
  const [istBearbeitetClicked, setIsBearbeitetClicked] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // für setFormIsValid
  useEffect(() => {
    // console.log(formIsValid)
    // console.log("Validate!");
    setFormIsValid(
      firstNameValue &&
        firstNameIsValid &&
        lastNameValue &&
        lastNameIsValid &&
        emailValue &&
        emailIsValid &&
        streetValue &&
        streetIsValid &&
        hnrValue &&
        hnrIsValid &&
        plzValue &&
        plzIsValid &&
        countryValue &&
        countryIsValid &&
        imageUrl !== ""
    );
    // [] means: Wenn every Keystroke changed
    return () => {
      // console.log("CLEANUP");
    };
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    streetIsValid,
    hnrIsValid,
    plzIsValid,
    countryIsValid,
    imageUrl,
  ]);

  useEffect(() => {
    if (istGenerierenClicked || istAngelegt) {
      setShowButton(true);
      // console.log(istGenerierenClicked);
      // console.log(istAngelegt);
      // console.log(showButton);
    }
  }, [istGenerierenClicked, istAngelegt]);

  // useUploadImage(uploadImage)
  const uploadImage = () => {
    const imgPath = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string and save to localStorage
        // localStorage.setItem("image", reader.result);
        setImageUrl(reader.result);
      },
      false
    );

    if (imgPath) {
      reader.readAsDataURL(imgPath);
      // localStorage.setItem("image", reader.readAsDataURL(imgPath));
    }
  };

  const randomUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data.results[0]);
        onFirstNameChange(data.results[0].name.first);
        onLastNameChange(data.results[0].name.last);
        onEmailChange(data.results[0].email);
        onStreetChange(data.results[0].location.street.name);
        onHnrChange(data.results[0].location.street.number);
        onPlzChange(data.results[0].location.postcode);
        onCountryChange(data.results[0].location.country);
        setImageUrl(data.results[0].picture.medium);
      });
  };

  const loadenUser = () => {
    // if localStorage "leer", styling von input und image ändern mit errorMessage "Bitte ausfüllen"
    // else localStorage "nicht leer", hole die letzte aktuellen daten aus dem localeStorage raus.
    if (localStorage.length !== 0) {
      console.log("Hii from loadenUser");
      setGenerierenClicked(true);
      // setGenerierenClicked(false);
      const extractedData = JSON.parse(localStorage.getItem("userData"));

      onFirstNameChange(extractedData.firstNameValue);
      onLastNameChange(extractedData.lastNameValue);
      onEmailChange(extractedData.emailValue);
      onStreetChange(extractedData.streetValue);
      onHnrChange(extractedData.hnrValue);
      onPlzChange(extractedData.plzValue);
      onCountryChange(extractedData.countryValue);
      setImageUrl(extractedData.imageUrl);
    } else {
      // Styling von Inputs-Felder ändern:
      console.log("LocalStorage leer!");
    }
  };

  const clickGenerierenHandler = (e) => {
    e.preventDefault();
    randomUser();
    setGenerierenClicked(true);
    // const user_loaden = document.querySelector("button[classname=load-user-enable]");
    // document.querySelector("button[class=load-user-enable]").files[1].style.display = "block";
  };

  const clickAnlegenHandler = (e) => {
    e.preventDefault();

    if (
      firstNameValue &&
      lastNameValue &&
      emailValue &&
      streetValue &&
      hnrValue &&
      plzValue &&
      countryValue &&
      imageUrl !== ""
    ) {
      setFormIsValid(true);
      setShowButton(true);
      const data = {
        firstNameValue,
        lastNameValue,
        emailValue,
        streetValue,
        hnrValue,
        plzValue,
        countryValue,
        imageUrl,
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

      localStorage.setItem("userData", JSON.stringify(data));
      setIstAngelegt(true);
      setIsInputDisabled(true);

      // console.log(data);
    } else {
      setFormIsValid(false);
    }
    // console.log(formIsValid);
  };

  const clickBearbeitenHandler = (e) => {
    e.preventDefault();
    setIsBearbeitetClicked(true);
    setIsInputDisabled(false);

    // styling vom input-Felder selectieren und dann zu Strichen ändern:
    const inputPath = document.querySelectorAll("input");
    const imgProfilePath = document.querySelector("img[class=profile-pic]");
    // var span = document.querySelectorAll("input").appendChild("span");

    console.log(inputPath);

    for (let i = 0; i < inputPath.length; i++) {
      if (firstNameValue === "") {
        console.log(!firstNameValue);
        inputPath[i].style.color = "#2c2c2c";
        inputPath[i].style.backgroundColor = "transparent";
        inputPath[i].style.border = "solid 1px #2c2c2c";
        imgProfilePath.style.border = "solid 4px #2c2c2c";
      } else {
        inputPath[i].style.color = "rot";
        inputPath[i].style.backgroundColor = "transparent";
        inputPath[i].style.border = "solid 1px red";
        imgProfilePath.style.border = "solid 4px red";
      }
      // inputPath[i].style.color = "#2c2c2c";
      // inputPath[i].style.backgroundColor = "transparent";
      // inputPath[i].style.border = "solid 1px red";
      // span.setAttribute("class", "input_span");
      // span.style.color = "rot";
      // span.style.backgroundColor = "rot";

      // console.log(span);
    }
    // imgProfilePath.style.border = "solid 5px red";
    // inputPath.addEventListener("load", function () {});
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

  const clickLoadenHandler = (e) => {
    e.preventDefault();
    loadenUser();
  };

  useEffect(() => {
    if (localStorage.length !== 0) {
      setGenerierenClicked(true);
    } else {
      setGenerierenClicked(false);
    }
  }, []);

  const clickSpeichernHandler = (e) => {
    e.preventDefault();
    console.log("Speichern geklickt!");
    setIsInputDisabled(true);
    const data = {
      firstNameValue,
      lastNameValue,
      emailValue,
      streetValue,
      hnrValue,
      plzValue,
      countryValue,
      imageUrl,
    };
    localStorage.setItem("userData", JSON.stringify(data));

    const inputPath = document.querySelectorAll("input");
    const imgProfilePath = document.querySelector("img[class=profile-pic]");

    for (let i = 0; i < inputPath.length; i++) {
      inputPath[i].style.color = "#2c2c2c";
      inputPath[i].style.backgroundColor = "#F1F2F6";
      inputPath[i].style.border = "solid 1px #F1F2F6";
      imgProfilePath.style.border = "#F1F2F6";
    }
  };

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

  return (
    <FormBox>
      <ProfileImage
        onChange={uploadImage}
        url={imageUrl}
        isInputDisabled={isInputDisabled}
      />
      <>{!imageUrl === "" && <p>Profile Bild ist erforderlich!</p>}</>
      <div className="input-container">
        {inputInfos.map(function (input, i) {
          return (
            <InputWrapper key={i} gridPosition={input.gridPosition}>
              <Input
                type={input.type}
                isInputDisabled={input.isInputDisabled}
                name={input.name}
                value={input.value}
                placeholder={input.placeholder}
                onChangeHandler={input.onChangeHandler}
                // hasError={input.hasError}
              />
              <>{!input.isValid && <p>{input.validateMessage}</p>}</>
            </InputWrapper>
          );
        })}
      </div>

      <div className="btn_container">
        {istAngelegt ? (
          <>
            {istBearbeitetClicked ? (
              <Button
                btnTitle={"Speichern"}
                className="btn save-user"
                onClickHandler={clickSpeichernHandler}
              />
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
              // className="btn create-user"
              className={
                // "btn create-user"
                formIsValid ? "btn create-user" : "btn button-disabled"
              }
            />
          </>
        )}
        {showButton && (
          <Button
            btnTitle={"User loaden"}
            onClickHandler={clickLoadenHandler}
            className={
              // istAngelegt ||
              istAngelegt || istGenerierenClicked
                ? "btn load-user-enable"
                : "btn load-user-disable"
            }
          />
        )}
      </div>
    </FormBox>
  );
};

export default SignUp;
