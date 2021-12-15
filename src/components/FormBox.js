import React from 'react';
import './FormBox.css';

// function FormBox(props) {
const FormBox = (props) => {
    
    return (
        <form className="form-container">
            {props.children}
        </form>
    )
}

export default FormBox;