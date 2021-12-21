import React, { useState } from 'react';
import FormBox from './FormBox';
import ProfileImage from './ProfileImage/ProfileImage';
import Input from './Inputwrapper/Input/Input';
import InputWrapper from './Inputwrapper/Inputwrapper';
import Button from './Button/Button';
import './SignUp.css';



function validateForm(values) {
       const errors = {};

       // errors.firstname = values.firstname = "^[A-Za-z0-9] {3,16}$";
       errors.firstname = values.firstname.length >= 3;
       errors.lastname = values.lastname.length >= 3;
       errors.email = values.email.length >= 3;
       errors.street = values.email.length >= 3;

       return errors;
}


// function SignUp() { 
const SignUp = () => {

       const initialInputs = [
              {
                     id: '',
                     firstname: 'firstname',
                     placeholder: 'Vorname',
                     value: '',
                     name: '',
                     type: 'text',
                     pattern: '^[A-Za-z0-9] {3,16}$',
              },
              {
                     id: '',
                     lastname: 'lastname',
                     placeholder: 'Nachname',
                     value: '',
                     name: '',
                     type: 'text',
              },
       ];

       const initialValues = {
                            firstname: '', 
                            lastname: '', 
                            email: '', 
                            street: '', 
                            hnr: '', 
                            postcode: '', 
                            country: ''
                     };
                     
       const [formValues, setFormValues] = useState(initialValues);
       const [errors, setErrors] = useState({});
    
      /*  
       const [firstname, setFirstname] = useState('');
       const [lastname, setLastname] = useState('');
       const [email, setEmail] = useState('');
       const [street, setStreet] = useState('');
       const [hnr , setHnr] = useState('');
       const [postcode , setPostcode] = useState('');
       const [country , setCountry] = useState('');
         */
       const [buttonDisabled, setButtonDisabled] = useState(true);
     
       const formChangeHandler = (event) => {
              const { name, value } = event.target;
              const nextValues = {...formValues, [name]: value };
              setFormValues(nextValues);
              // => einige errors werden gesetzt, andere bleiben leer
              // das liegt am rueckgabewert von validateForm()
              setErrors(validateForm(nextValues));
       }
       /*  
       const formChangeHandler = (event) => {
              const myValues = {...formValues}
              if(event.target.name === 'vorname' && firstname.length >= 3) {
                     myValues.firstname = event.target.value;
              }
              if (event.target.name === 'nachname' && lastname.length >=3) {
                     setLastname(event.target.value); 
              }
              if(country.length >=3 ) {
                     setButtonDisabled(false); 
              } else {
                     setButtonDisabled(true); 
              }
       } 
       */

       /* 
      const formChangeHandler = (event) => {
              if (event.target.name === 'vorname') {
                     setFirstname(event.target.value);
              }
              if (firstname.length >= 3) {
                     setButtonDisabled(false)
              }
      }
      */ 
      
      return ( 
        <FormBox > 
            <ProfileImage />
            <div className='input-container'>

                <InputWrapper gridPosition="firstname-input">
                <Input 
                       type="text"
                       placeholder='Vorname'
                       name='firstname'
                       hasError={!errors.firstname}
                       value={formValues.firstname}
                       onChangeHandler={formChangeHandler}
                />
                {errors.firstname === false && <p>Vorname ist erforderlich</p> }
                {/* {errors.firstname === false && (<Error>Error</Error>) } */}
                {/* <Error errors={errors} name="firstname" /> */}
                </InputWrapper>

                <InputWrapper gridPosition="lastname-input">
                <Input   
                       type="text"
                       name='lastname'
                       value={formValues.lastname}
                       placeholder='Nachname'
                       onChangeHandler= {formChangeHandler} 
                />
                {errors.lastname === false && <p>Nachname ist erforderlich</p> }
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
