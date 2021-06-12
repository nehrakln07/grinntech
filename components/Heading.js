import React from 'react';
import Slide from 'react-reveal/Slide';


const Heading = (props) =>{
    const {text, align, ...rest } = props;
    const isRight = align=="right";
    return(
        <Slide left={!isRight} right={isRight}>
             <h1 className={`heading relative text-4xl mb-12 font-medium text-black ${align=='right' ? 'right text-right': 'left text-left'}`} {...rest}>{text}</h1>
        </Slide>
    )
}

export default Heading;