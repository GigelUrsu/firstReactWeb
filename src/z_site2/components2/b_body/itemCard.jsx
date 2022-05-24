import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Images from "../../data2/images/index.js";
import "./itemCard_css.css"

function ItemCard({name, id, image, price, item}){
    const [imageNumber,setImageNumber]=useState(0);

    return(
        <div className="ItemCard" onMouseEnter={()=>setImageNumber(1)} onMouseLeave={()=>setImageNumber(0)}>
            <Link to={`/2/item/gen=${item.gen}&category=${item.category[item.category.length-1]}&name=${item.name}&color=${item.color[0]||'color'}`}>
           <img className="Image" src={item.image[imageNumber]} alt=""/>
            </Link>
            <div className="AddToFavorites fa fa-heart-o"></div>
           <p className="Name">{name}</p>
           <p className="Price">{price}</p>
           <div className="Colors">
            {item.color ? item.color.map((i,index)=>{
            return <div className="LittleColor" key={index} style={{backgroundColor:`#${i}`, width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>
            }) : ''}
            </div>  
        </div>
    )
}

export default ItemCard;