import React from 'react';
import './Input.css';

//function Input(props) {
const Input = (props) => {      
    
    // const inputValue = (event) => {
    //         props.onChangeHandler(event.target.value);
    //     }



    return (
        <div className={props.gridPosition}>
            <input className="input"
                   type={props.type || 'text'} 
                   name={props.name}
                   placeholder={props.placeholder}
                   onChange={ props.onChangeHandler }
            /> 
        </div>
    )
}

export default Input;