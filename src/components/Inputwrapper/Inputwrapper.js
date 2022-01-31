import React from 'react';
// import './Input/Input.css';
import '../SignUp.css';

const InputWrapper = (props) => {
    
    return (
        <div className={props.gridPosition}>
            {props.children}
        </div>
    )
}

export default InputWrapper; 