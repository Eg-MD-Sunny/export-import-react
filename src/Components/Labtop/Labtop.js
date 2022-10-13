import React from 'react';
import { sub } from '../Utilities/Utilities';

const Labtop = () => {
    const first = 20;
    const second = 10;
    const resultSub = sub(first,second)
    return (
        <div>
            <h3>This is Labtop Componenet</h3>
            <p>Total Sub:{resultSub}</p>
        </div>
    );
};

export default Labtop;