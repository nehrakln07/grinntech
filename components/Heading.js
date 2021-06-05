import React from 'react';

const Heading = (props) =>{
    const {text, align } = props;
    return(
        <h1 className={`heading relative text-5xl font-bold text-green-450 ${align=='right' ? 'right text-right': 'left text-left'}`}>{text}</h1>
    )
}

export default Heading;