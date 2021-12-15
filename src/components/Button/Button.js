import React from 'react';
import './Button.css';

function Button(props) {
    
    return (
        <div className={props.className}>
            <button className="button" onClick={() => console.log("say Hi")}>User generieren</button>
        </div>
    )
}
export default Button;