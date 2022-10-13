import React from 'react';
import { div } from '../Utilities/Utilities';

const Shoes = () => {
    const first = 100;
    const second = 10;
    const resultDiv = div(first,second);
    return (
        <div>
            <h3>This is Shoes Componenet</h3>
            <p>Total Divition: {resultDiv}</p>
        </div>
    );
};

export default Shoes;