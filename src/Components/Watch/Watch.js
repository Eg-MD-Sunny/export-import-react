import React from 'react';
import { multi } from '../Utilities/Utilities';

const Watch = () => {
    const first = 20;
    const second = 10;
    const resultMulti = multi(first,second);
    return (
        <div>
            <h3>This is Watch Componenet</h3>
            <p>Total Multi Value: {resultMulti}</p>
        </div>
    );
};

export default Watch;