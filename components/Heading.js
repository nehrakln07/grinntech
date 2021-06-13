import React from 'react';
import Slide from 'react-reveal/Slide';


const Heading = (props) =>{
    const {text, type="primary", align, textClass, ...rest } = props;
    const isRight = align=="right";
    return(
        <Slide left={!isRight} right={isRight}>
             <h1 className={`heading ${type} ${align=='right' ? 'right': 'left'} relative mb-10`} {...rest}>{text}</h1>
        </Slide>
    )
}

export default Heading;