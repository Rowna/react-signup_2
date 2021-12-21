import React from 'react';


function Error(props) {
    return (
        <div>
            {props.errors[props.name] === false && (
                <p>Bitte füllen Sie dieses Feld aus.</p>
            )}
        </div>
    )
}
export default Error;