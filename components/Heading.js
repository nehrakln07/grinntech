import React from 'react';
import Slide from 'react-reveal/Slide';


const Heading = (props) =>{
    const {text, align } = props;
    const isRight = align=="right";
    return(
        <Slide left={!isRight} right={isRight}>
             <h1 className={`heading relative text-5xl mb-12 font-bold text-green-450 ${align=='right' ? 'right text-right': 'left text-left'}`}>{text}</h1>
        </Slide>
    )
}

export default Heading;