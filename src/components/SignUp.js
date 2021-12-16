import React, { useState } from 'react';
import FormBox from './FormBox';
import ProfileImage from './ProfileImage/ProfileImage';
import Input from './Input/Input';
import Button from './Button/Button';
import './SignUp.css';


// function SignUp() { 
const SignUp = () => {
    
       const [firstname, setFirstname] = useState('');
       console.log(firstname);

       //  const [lastname, setLastname] = useState('');
    
       /* 
       function updateValue(e) {
              if (e.target.name === "Vorname") {
                     setFirstname(e.target.value);
                     console.log(`firstName state: ${firstname}`)
              }

              if (e.target.name === "Nachname") {
                     setLastname(e.target.value);
                     console.log(`lastName state: ${lastname}`)
              }

              // ...
      } 
       */
    
      return (
        <FormBox > 
            <ProfileImage />
            <div className='input-container'>
                <Input gridPosition="firstname-input" 
                       type="text" 
                       placeholder='Vorname'
                       name='Vorname'
                       onChangeHandler={setFirstname}

                />
                <Input gridPosition="lastname-input" 
                       type="text"
                       name="Nachname"
                       placeholder='Nachname' 
                     //   onChangeHandler={updateValue}

                />
                <Input gridPosition="email-input" 
                       placeholder='E-Mail-Adresse' 

                />
                <Input gridPosition="street-input" 
                       placeholder='Straße' 

                />
                <Input gridPosition="hnr-input" 
                       placeholder='Hsnr.' 

                />
                <Input gridPosition="postcode-input" 
                       placeholder='PLZ' 

                />
                <Input gridPosition="country-input" 
                       placeholder='Ort' 

                />
            </div> 
            <Button className="btn" />
            {/* <Button className="btn" disabled={firstname && lastname}/> */}
        </FormBox> 
    );
}

export default SignUp;
