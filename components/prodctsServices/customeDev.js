import React from 'react';
import CellComponent from "./CellComponent";

const CONFIG = []

const CustomDev = () =>{
    return(
        <div className="px-4 py-32 text-2xl text-center text-green-450">
            {
                CONFIG.map((item, key)=>{
                    return(
                        <CellComponent key={key} {...item} />
                    )
                })
            }
        </div>
    )
}

export default CustomDev;