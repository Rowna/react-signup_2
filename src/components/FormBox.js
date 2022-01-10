import React from 'react';
import './FormBox.css';

// function FormBox(props) {
const FormBox = (props) => {
    
    return (
        <form onSubmit={props.onSubmit} className="form-container">
            {props.children}
        </form>
    )
}

export default FormBox;