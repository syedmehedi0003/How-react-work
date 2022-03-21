import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid black', margin: '10px' }}>
            <h2>This is Dial</h2>
            <h3>Steps so far: {props.steps}</h3>
        </div>
    );
};

export default Dial;