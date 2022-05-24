import React from "react";
import './csgoItem_css.css'

function csgoItem({name, price}){
    return(
        <div className="csgoItem">
            <p>{name} : {price}</p>
        </div>
    )
}
export default csgoItem