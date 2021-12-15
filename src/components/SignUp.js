import React from 'react';
import FormBox from './FormBox';
import ProfileImage from './ProfileImage/ProfileImage';
import Input from './Input/Input';
import Button from './Button/Button';
import './SignUp.css';


function SignUp() {
    const firstname = "Vorname";
    const lastname = "Nachname";
    const email = "E-Mail-Adresse";
    const street = "Straße";
    const hnr = "Hsnr.";
    const postcode = "PLZ";
    const country = "Ort";

    return (
        <FormBox > 
            <ProfileImage />
            <div className='input-container'>
                <Input className="firstname-input" placeholder={firstname} />
                <Input className="lastname-input" placeholder={lastname} />
                <Input type="email" className="email-input" placeholder={email} />
                <Input className="street-input" placeholder={street} />
                <Input className="hnr-input" placeholder={hnr} />
                <Input className="postcode-input" placeholder={postcode} />
                <Input className="country-input" placeholder={country} />
            </div> 
            <Button className="btn" />
        </FormBox> 
    );
}

export default SignUp;
