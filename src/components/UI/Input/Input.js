import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case ('input'):
            inputElement = <input />;
            break;
        case ('textarea'):
            inputElement = <textarea />
            break;
        default:
            inputElement = <input />;
    }

    return (
        <div>
            <label>{props.label}</label>

        </div>
    );
}

export default input;