import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case ('input'):
            inputElement: <input />
        case('textarea'):
            inputElement: <textarea />
    }

    return (
        <div>
            <label>{props.label}</label>

        </div>
    );
}

export default input;