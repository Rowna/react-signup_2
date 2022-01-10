import React from 'react';


function Error(props) {
    return (
        <div>
            {/* not false, cause errors not bool, but string */}
            {/* {props.errors[props.name] === false && ( <p>Bitte ausfüllen</p> ) } */}
            {props.errorsMessage[props.name] !== props.errorsMessage.name && <p>{props.errorsMessage[props.name]}</p> }
        </div>
    )
}
export default Error; 