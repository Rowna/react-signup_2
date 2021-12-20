import React, { useState } from 'react';
import FormBox from './FormBox';
import ProfileImage from './ProfileImage/ProfileImage';
import Input from './Input/Input';
import Button from './Button/Button';
import './SignUp.css';


// function SignUp() { 
const SignUp = () => {

       
    
       const [firstname, setFirstname] = useState('');
       const [lastname, setLastname] = useState('');
       const [email, setEmail] = useState('');
       const [street, setStreet] = useState('');
       const [hnr , setHnr] = useState('');
       const [postcode , setPostcode] = useState('');
       const [country , setCountry] = useState('');
       
       const [buttonDisabled, setButtonDisabled] = useState(true);
       
       const formChangeHandler = (event) => {
              if(event.target.name === 'vorname' && firstname.length >= 3) {
                     setFirstname(event.target.value);
              }
              if (event.target.name === 'nachname' && lastname.length >=3) {
                     setLastname(event.target.value); 
              }
              if(event.target.name === 'email' && email.length >=6) {
                     setEmail(event.target.value);
              }
              if (event.target.name === 'strasse' && street.length >=3) {
                     setStreet(event.target.value); 
              }
              if (event.target.name === 'hnr' && hnr.length >=3) {
                     setHnr(event.target.value); 
              }
              if (event.target.name === 'plz' && postcode.length >=3) {
                     setPostcode(event.target.value); 
              }
              if (event.target.name === 'ort') {
                     setCountry(event.target.value); 
              }
              
              if(country.length >=3 ) {
                     setButtonDisabled(false); 
              } else {
                     setButtonDisabled(true); 
              }
       } 

       /* 
      const formChangeHandler = (event) => {
              if (event.target.name === 'vorname') {
                     setFirstname(event.target.value);
                     // setLastname(event.target.value);
                     // setEmail(event.target.value);
                     // setStreet(event.target.value);
                     // setHnr(event.target.value);
                     // setPostcode(event.target.value);
                     // setCountry(event.target.value);
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
                <Input gridPosition="firstname-input" 
                       type="text" 
                       placeholder='Vorname'
                       name='vorname'
                       onChangeHandler={formChangeHandler}
                />
                <Input gridPosition="lastname-input" 
                       type="text"
                       name='nachname'
                       placeholder='Nachname'
                       onChangeHandler= {formChangeHandler} 
                />
                <Input gridPosition="email-input"
                       type="text"
                       name='email' 
                       placeholder='E-Mail-Adresse' 
                       onChangeHandler= {formChangeHandler}
                />
                <Input gridPosition="street-input"
                       type="text"
                       name='strasse' 
                       placeholder='Straße'
                       onChangeHandler= {formChangeHandler} 
                />
                <Input gridPosition="hnr-input"
                       name='hnr'
                       placeholder='Hsnr.'
                       onChangeHandler= {formChangeHandler} 
                />
                <Input gridPosition="postcode-input"
                       name='plz' 
                       placeholder='PLZ'
                       onChangeHandler= {formChangeHandler} 
                />
                <Input gridPosition="country-input" 
                       name='ort'
                       placeholder='Ort'
                       onChangeHandler= {formChangeHandler} 
                />
            </div> 
            <Button className="btn" disabled={buttonDisabled}/>
            {/* <Button className="btn" disabled={ firstname && lastname }/> */}
        </FormBox> 
    );
}

export default SignUp;
