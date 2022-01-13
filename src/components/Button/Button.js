import React from 'react';
import './Button.css';

// function Button(props) {
const Button = (props) => {


   
    return (
        // <div className={props.className}> 
        //      <button className={props.disabled ? 'button' : 'button enabled'}>{btnTitle}</button>
        // </div>
        <div>   
            <button onClick={props.onClickHandler} className={props.className} disabled={props.disabled}>{props.btnTitle}</button>
        </div> 
    )
} 
export default Button; 