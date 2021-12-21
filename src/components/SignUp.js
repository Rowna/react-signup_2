import React, { useState } from 'react';
import FormBox from './FormBox';
import ProfileImage from './ProfileImage/ProfileImage';
import InputWrapper from './Inputwrapper/Inputwrapper';
import Input from './Inputwrapper/Input/Input';
import Error from './Error/Error';
import Button from './Button/Button';
import './SignUp.css';


function validateForm(values) {
       const errors = {};

       errors.firstname = values.firstname.length >= 3;
       errors.lastname = values.lastname.length >= 3;
       errors.email = values.email.length >= 3;
       errors.street = values.email.length >= 3;

       return errors; // {"firstname":false,"lastname":false,"email":false,"street":false}
}

const SignUp = () => {

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
       const [buttonDisabled, setButtonDisabled] = useState(true);
     
       const formChangeHandler = (event) => {
              const { name, value } = event.target;
              const nextValues = {...formValues, [name]: value };
              setFormValues(nextValues);
              // => einige errors werden gesetzt, andere bleiben leer
              // das liegt am rueckgabewert von validateForm()
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
                       hasError={errors.firstname === false}
                       value={formValues.firstname}
                       onChangeHandler={formChangeHandler}
                />
                {/* {errors.firstname === false && <p>Vorname ist erforderlich</p> } */}
                <Error 
                       errors={errors} 
                       name="firstname"        
                />
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
