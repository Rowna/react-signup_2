import React from 'react';
import './Button.css';

// function Button(props) {
const Button = (props) => {
    const btnTitle = 'User generieren';


    const userGenerierenHandler = () => {
        console.log('Button clicked!!!');
    }    
    return (
        <div className={props.className}>
            <button className="button" onClick={userGenerierenHandler} >{btnTitle}</button>
        </div>
    )
} 
export default Button; 