import React from 'react';
import './Input.css';

//function Input(props) {
const Input = (props) => {      

    const formValue = (event) => {
        // console.log(`Updating '${props.name}' with '${event.target.value}'`)
        props.onChangeHandler(event.target.value);
    }

    return (
        <div className={props.gridPosition}>
            <input className="input"
                   type={props.type || 'text'} 
                   name={props.name}
                   placeholder={props.placeholder}
                //    onChange={(event) => {props.onChangeHandler(event.target.value)}}
                   onChange={formValue}
            /> 
        </div>
    )
}

export default Input;