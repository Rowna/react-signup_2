import React from 'react';
import './FormBox.css';

function FormBox(props) {
    return (
        <form className="form-container">
            {props.children}
        </form>
    )
}

export default FormBox;