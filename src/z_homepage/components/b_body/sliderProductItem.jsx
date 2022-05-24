import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sliderProductItemCss.css"
function SliderProductItem({obj,idx,slideIndex,numberOfItemsToShow}){
    const [imageNumberSlider,setImageNumberSlider]=useState(0);
    //style={{width:`${(80-numberOfItemsToShow+1)/numberOfItemsToShow}vw`}}
    return(
        <div className="sliderProductItem">
            <div onMouseEnter={()=>setImageNumberSlider(1)} onMouseLeave={()=>setImageNumberSlider(0)} className={`slide-div ${slideIndex === idx ? "active-slide" : slideIndex>idx ? "content" : ""}`} key={idx} >
                <div className="image-container" >
                    <Link to={`/2/item/gen=${obj.gen}&category=${obj.category[obj.category.length-1]}&name=${obj.name}&color=${obj.color[0]||'color'}`}>
                    <img className="pointer" src={obj.image[imageNumberSlider]} alt="" style={{width:`${window.innerWidth>500?80/numberOfItemsToShow-1:80}vw`}}/>
                    </Link>
                    <div className="AddToFavorites fa fa-heart-o"></div>
                </div>
                <div className="under-image-container">
                    <p className="Slider-product-name">{obj.name}</p>
                    <p className="Slider-product-price">{obj.price}</p>
                    <div className="Slider-product-colors">
                            {obj.color ? obj.color.map((i,index)=>{
                            return <div className="LittleColor" key={index} style={{backgroundColor:`#${i}`, width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>
                            }) : <div className="LittleColorNone" style={{backgroundColor:"rgba(255, 255, 255, 0)", width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SliderProductItem;