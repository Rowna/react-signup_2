import React from 'react';
import './Button.css';

// function Button(props) {
const Button = (props) => {


   
    return (
        // <div className={props.className}> 
        //      <button className={props.disabled ? 'button' : 'button enabled'}>{btnTitle}</button>
        // </div>
        <div className={props.className}>  
            <button className='button' disabled={props.disabled} type="submit" >{props.btnTitle}</button>
        </div> 
    )
} 
export default Button; 