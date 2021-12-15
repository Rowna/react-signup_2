import React from 'react';
import './Input.css';

//function Input(props) {
const Input = (props) => {      

    const formValue = (event) => {
        props.onChangeHandler(event.target.value);
    }

    return (
        <div className={props.gridPosition}>
            <input className="input"
                   type={props.type || 'text'} 
                   placeholder={props.placeholder}
                   onChange={formValue}
            />
        </div>
    )
}

export default Input;