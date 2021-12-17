import React, { useState } from 'react';
import './Input.css';

//function Input(props) {
const Input = (props) => {      

    const [firstname, setFirstname] = useState('');
    
    // const inputValue = (event) => {
        //     props.onChangeHandler(event.target.value);
        // }
        
        const inputChangeHandler = (event) => {
            setFirstname(event.target.value);
            console.log(firstname);
    };

    return (
        <div className={props.gridPosition}>
            <input className="input"
                   type={props.type || 'text'} 
                   name={props.name}
                   placeholder={props.placeholder}
                   onChange={ inputChangeHandler }
            /> 
        </div>
    )
}

export default Input;