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

        // const [lastname, setLastname] = useState('');
    

    // const userInputHandlerMap = {
    //     firstname: (event) => {
    //         setFirstname(event.target.value)
    //     },
    //     lastname: (event) => {
    //         setLastname(event.target.value)
    //     },
    //     email: '',
    //     street: '',
    //     hnr: '',
    //     postcode: '',
    //     country: ''
    // }
    // console.log(userInput);

 
    return (
        <FormBox > 
            <ProfileImage />
            <div className='input-container'>
                <Input gridPosition="firstname-input" 
                       type="text" 
                       placeholder='Vorname' 
                       onChangeHandler={setFirstname}

                />
                <Input gridPosition="lastname-input" 
                       type="text" 
                       placeholder='Nachname' 

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
