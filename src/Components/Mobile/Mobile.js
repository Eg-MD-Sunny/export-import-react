import React from 'react';
import { add } from '../Utilities/Utilities';

const Mobile = () => {
    const first = 10;
    const second = 5;
    const resultSum = add(first,second)
    return (
        <div>
            <h3>This is Mobile Componenet</h3>
            <p>Total Sum: {resultSum}</p>
        </div>
    );
};

export default Mobile;