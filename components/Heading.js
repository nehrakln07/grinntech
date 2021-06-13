import React from 'react';
import Slide from 'react-reveal/Slide';


const Heading = (props) =>{
    const {text, align, textClass, ...rest } = props;
    const isRight = align=="right";
    return(
        <Slide left={!isRight} right={isRight}>
             <h1 className={`heading relative ${textClass ? textClass : 'text-4xl font-medium'} mb-12 text-black ${align=='right' ? 'right text-right': 'left text-left'}`} {...rest}>{text}</h1>
        </Slide>
    )
}

export default Heading;