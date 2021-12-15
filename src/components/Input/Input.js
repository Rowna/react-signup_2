import React from 'react';
import './Input.css';

function Input(props) {
      
    return (
        <div className={props.className}>
            <input className={`input ${props.className}`}
                   type={props.type || 'text'} 
                   placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input;