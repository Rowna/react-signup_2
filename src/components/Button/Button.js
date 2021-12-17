import React from 'react';
import './Button.css';

// function Button(props) {
const Button = (props) => {
    const btnTitle = 'User generieren';

   
    return (
        <div className={props.className}>
            <button className="button" >{btnTitle}</button>
        </div>
    )
} 
export default Button; 