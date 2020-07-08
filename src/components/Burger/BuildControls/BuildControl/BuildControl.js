import React from 'react';

const buildControl = (props) => (
    <div>
        <div>{props.ingredientLabel}</div>
        <button>Less</button>
        <button>More</button>
    </div>
);

export default buildControl;