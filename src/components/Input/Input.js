import React from 'react';
import './Input.css';

//function Input(props) {
const Input = (props) => {      

    return (
        <div className={props.gridPosition}>
            <input className="input"
                   required
                   type={props.type || 'text'} 
                   name={props.name}
                   placeholder={props.placeholder}
                   onChange={ props.onChangeHandler }
            /> 
        </div>
    )
}

export default Input;