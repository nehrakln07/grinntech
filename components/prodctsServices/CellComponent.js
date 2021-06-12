import React, { useState } from 'react';
import Heading from "../Heading";


const CellComponent = (props) =>{
    const {heading, data} = props;
    return(
        <div className="px-4 py-32">
            <Heading style={{fontSize: '36px'}} text={heading} />
            <div className="flex">
                {
                  data.map((item, key)=>{
                      return(
                        <div className="">
                            <div className="w-full">
                                <img src={item.image} />
                            </div>
                            <p>{item.description}</p>
                        </div>
                      )
                  })  
                }
            </div>
        </div>
    )
}

export default CellComponent;