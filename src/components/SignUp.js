import React, { useState } from 'react';
import FormBox from './FormBox';
import ProfileImage from './ProfileImage/ProfileImage';
import InputWrapper from './Inputwrapper/Inputwrapper';
import Input from './Inputwrapper/Input/Input';
import Error from './Error/Error';
import Button from './Button/Button';
import './SignUp.css';


// function validateForm(values) {
const validateForm = (values) => {
       const errors = {};

       // hier wird geprüft: Ist die Länge von values.firstname >= 3?
       // das Ergebnis ist entweder true oder false.
       // Dieses Ergebnis wird dann errors.firstname zugewiesen. 
       errors.firstname = values.firstname.length >= 3;
       // hier wird geprüft: Ist die Laenge von values.lastname >= 3, 
       // Das Ergebnis ist false oder true,
       // Dann wird das Ergebnis errors.lastname zugewiesen
       errors.lastname = values.lastname.length >= 3;
       // Es wird geprüft: Ist die Länge von values.email >=3 ?
       // Das Ergebnis ist entweder false oder true,
       // Dann wird das Ergebnis errors.email zugewiesen
       errors.email = values.email.length >= 3;
       // Es wird geprüft: Ist die Länge von values.email >=3?
       // Das Ergebnis ist entweder true oder false 'bool',
       // Dann wird das Ergebnis errors.street zugewiesen
       errors.street = values.street.length >= 3;

       return errors; // { "firstname": false,   "lastname": false,    "email": false,  "street": false }
}


const SignUp = () => {

       const eintraege = {
                            firstname: '', 
                            lastname: '', 
                            email: '', 
                            street: '', 
                            hnr: '', 
                            postcode: '', 
                            country: ''
                     };
       // wir brauchen state-variablen, um React mitzuteilen,
       // wann es (d.h. React) ein bestimmtes Element/Component
       // updaten soll -- naemlich dann, wenn sich die state-Variable
       // aendert!
       //
       // Heisst im Umkehrschluss: Wenn wir WOLLEN, dass React ein bestimmtes Update
       // vornimmt, muessen wir ihm dafuer eine state-Variable mit auf den
       // Weg geben. Sonst erkennt React seinen Auftrag nicht.
       const [formValues, setFormValues] = useState(eintraege);
       const [errors, setErrors] = useState({});
       const [buttonDisabled, setButtonDisabled] = useState(true);
     
       const formChangeHandler = (event) => {
              // wir isolieren event.target.name und event.target value
              // und speichern sie in den NEUEN variablen 'name' und 'value' ab.
              // Fachbegriff: Object-Decomposition
              const { name, value } = event.target;

              // {...formValues, [name]: value } bedeutet:
              // nimm alle bestehenden eintraege von formValues,
              // speichere sie als neue eintrage fuer ein neues {object},
              // und ueberschreibe dann den eintrag [name]: eintrag mit [name]: value.
              // die Schreibweise [name] ist eine Sicherheits-Schreibweise, falls 
              // 'name' (Z.50) zufaelligerweise mal 'last-name' heissen sollte, also
              // Zeichen enthaelt, die JavaScript nur dann als key akzeptiert, wenn
              // sie ausdruecklich als String zu erkennen sind: "last-name"
              // Bei [name] wird der Wert von 'name' (Z.50) automatisch in einen String
              // umgewandelt. 
              const nextValues = {...formValues, [name]: value };
              // console.log(nextValues);

              // hier wird das alte objekt 'formValues', z.B. mit der Speicheradresse 11111
              // durch das NEUE Objekt nextValues mit der Speicheradresse 22222 ersetzt.
              // formValues ist nur eine Referenz auf eine Speicheradresse.
              // setFormValues ersetzt die alte Speicheradresse 11111 durch die NEUE
              // Speicheradresse 22222.
              // Das ist der Unterschied, den React "sieht". Neue Speicheradressen-Eintrag
              // in formValues. Darauf reagiert es und updatet das Component.
              // Das ist extrem wichtig zu verstehen, damit du die Arbeitsweise von React verstehst!
              setFormValues(nextValues);
              // wichtige Beobachtung: Bei validateForm() "mit Klammern" wird die Funktion ausgefuehrt,
              // bei validateForm ohne Klammern nicht. validateForm speichert die Speicheradresse
              // der Funktion validateForm. Wenn validateForm() ausgefuehrt wird, ist der Wert,
              // der in setErrors() ankommt, nicht die Speicheradresse von validateForm,
              // sondern die Speicheradresse von ihrem RÜCKGABEWERT!!!
              // genau diese Speicheradresse ist jetzt der neue Wert der State-Variablen "errors"
              // weil React diese Werte-Änderung mitbekommt, wird dieses Component upgedatet.
              setErrors(validateForm(nextValues));
       }
      
      return ( 
        <FormBox > 
            <ProfileImage />
            <div className='input-container'>

                <InputWrapper gridPosition="firstname-input">
                <Input 
                       type="text"
                       placeholder='Vorname'
                       name='firstname'
                       // {!errors.firstname === false}: mit '!' vergleichen wir, ob firstname im Objekt false ist, aber errors{} 
                       // ist ein leeres Objekt, und errors.firstname ist undefined und gibt es noch nicht. Deswegen nachdem es gibt, 
                       // vergleichen wir es, ob es === false. 
                     
                       hasError={errors.firstname === false}
                       value={formValues.firstname}
                       onChangeHandler={formChangeHandler}
                />
                {/* {errors.firstname === false && <p>Vorname ist erforderlich</p> } */}
                <Error errors={errors} name="firstname" />
                </InputWrapper>

                <InputWrapper gridPosition="lastname-input">
                <Input   
                       type="text"
                       name='lastname'
                       hasError={errors.lastname === false}
                       value={formValues.lastname}
                       placeholder='Nachname'
                       onChangeHandler= {formChangeHandler} 
                />
                {/* {errors.lastname === false && <p>Nachname ist erforderlich</p> } */}
                <Error errors={errors} name="lastname" />
                </InputWrapper>
                
                <InputWrapper gridPosition="email-input">
                <Input
                       type="text"
                       name='email' 
                       value={formValues.email}
                       placeholder='E-Mail-Adresse' 
                       onChangeHandler= {formChangeHandler}
                />
                {errors.email === false && (<p>Eine gültige E-Mail-Adresse ist erforderlich</p>) }
                {/* {errors.firstname === false && (<Error>Error</Error>) } */}
                </InputWrapper>

                <InputWrapper gridPosition="street-input">
                <Input 
                       type="text"
                       name='street' 
                       value={formValues.street}
                       placeholder='Straße'
                       onChangeHandler= {formChangeHandler} 
                />
                {errors.street === false && (<p>Error</p>) }
                </InputWrapper>

                <InputWrapper gridPosition="hnr-input">
                <Input 
                       name='hnr'
                       value={formValues.hnr}
                       placeholder='Hsnr.'
                       onChangeHandler= {formChangeHandler} 
                />
                {errors.hnr === false && (<p>Error</p>) }
                </InputWrapper>

                <InputWrapper gridPosition="postcode-input">
                <Input 
                       name='postcode' 
                       value={formValues.postcode}
                       placeholder='PLZ'
                       onChangeHandler= {formChangeHandler} 
                />
                {errors.postcode === false && (<p>Error</p>) }
                </InputWrapper>

                <InputWrapper gridPosition="country-input" >
                <Input 
                       name='country'
                       value={formValues.country}
                       placeholder='Ort'
                       onChangeHandler= {formChangeHandler} 
                />
                {errors.country === false && (<p>Error</p>) }
                </InputWrapper>
            </div>
              
            <Button className="btn" disabled={buttonDisabled}/>
        </FormBox> 
    );
}

export default SignUp;
