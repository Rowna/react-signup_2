import React from 'react';


function Error(props) {
    return (
        <div>
            {props.errors[props.name] === false && ( <p>Bitte ausfüllen</p> ) }
        </div>
    )
}
export default Error; 