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

    
      return (
        <FormBox > 
            <ProfileImage />
            <div className='input-container'>
                <Input gridPosition="firstname-input" 
                       type="text" 
                       placeholder='Vorname'
                     //   onChangeHandler={setFirstname}
                />
                <Input gridPosition="lastname-input" 
                       type="text"
                       placeholder='Nachname'
                       onChangeHandler= {setLastname} 
                />
                <Input gridPosition="email-input"
                       type="text" 
                       placeholder='E-Mail-Adresse' 
                       onChangeHandler= {setEmail}
                />
                <Input gridPosition="street-input"
                       type="text" 
                       placeholder='Straße'
                       onChangeHandler= {setStreet} 
                />
                <Input gridPosition="hnr-input"
                       placeholder='Hsnr.'
                       onChangeHandler= {setHnr} 
                />
                <Input gridPosition="postcode-input" 
                       placeholder='PLZ'
                       onChangeHandler= {setPostcode} 
                />
                <Input gridPosition="country-input" 
                       placeholder='Ort'
                       onChangeHandler= {setCountry} 
                />
            </div> 
            {/* <Button className="btn" /> */}
            <Button className="btn" disabled={ firstname && lastname }/>
        </FormBox> 
    );
}

export default SignUp;
