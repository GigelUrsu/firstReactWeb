import React, { useEffect, useState } from "react";
import './slider_products_css.css';
import slider_data from "../../../z_site2/data2/items-data.js";
import SliderProductItem from "./sliderProductItem";
// import {Link} from 'react-router-dom';


function Slider_products({title, seeAll}){
    // const [imageNumberSlider,setImageNumberSlider]=useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const [numberOfItemsToShow ,setNumberOfItemsToShow] = useState(4);
    function scrollR(){
        if(slideIndex===slider_data.length-numberOfItemsToShow){
            setSlideIndex(0)
        }
        else if(slideIndex+(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2))+numberOfItemsToShow<=slider_data.length){
            setSlideIndex(slideIndex+(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2)));
        }
        else{
            setSlideIndex(slideIndex+(slider_data.length-slideIndex-numberOfItemsToShow));
        }
    }
    function scrollL(){
        if(slideIndex===0){
            setSlideIndex(slider_data.length-numberOfItemsToShow)
        }
        else if(slideIndex-(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2))>=0){
        setSlideIndex(slideIndex-(numberOfItemsToShow===1?1:parseInt(numberOfItemsToShow/2)))
        }
        else if(slideIndex>0){
            setSlideIndex(0)
        }
    }

    const handleResize = ()=>{
        if(window.innerWidth<770){
            setNumberOfItemsToShow(2)
        }
        else if(window.innerWidth>770 && window.innerWidth<=1500){
            setNumberOfItemsToShow(3)
        }
        else if(window.innerWidth>1500 && window.innerWidth<=2000){
            setNumberOfItemsToShow(4)
        }
        else if(window.innerWidth>2000 && window.innerWidth<=3000){
            setNumberOfItemsToShow(5)
        }
        else if(window.innerWidth>3000){
            setNumberOfItemsToShow(6)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize,false)
        if(window.innerWidth<770){
            setNumberOfItemsToShow(2)
        }
        else if(window.innerWidth>770 && window.innerWidth<=1500){
            setNumberOfItemsToShow(3)
        }
        else if(window.innerWidth>1500 && window.innerWidth<=2000){
            setNumberOfItemsToShow(4)
        }
        else if(window.innerWidth>2000 && window.innerWidth<=3000){
            setNumberOfItemsToShow(5)
        }
        else if(window.innerWidth>3000){
            setNumberOfItemsToShow(6)
        }
    },[])

    return(
        <div className="Slider_products">
            <div className="Slider-title-div">
                <p className="Slider_title">{title}</p>
                <div className="buttons">
                <button onClick={()=>scrollL()} className="buttonSlideA fa fa-chevron-left"></button>
                <button onClick={()=>scrollR()} className="buttonSlideA fa fa-chevron-right"></button>
                </div>
                {/* {seeAll ? <Link to={`/${seeAll}`} style={{color:"unset"}}>See All</Link>:""} */}
            </div>
            <div className="hidden">
            <div className="Slides" style={{transform:`translate(-${slideIndex*(window.innerWidth>500?80/numberOfItemsToShow:81)}vw)`, transitionDuration:"1s"}}>
            {slider_data.map((obj,idx)=>{
                return(
                    <SliderProductItem className="SliderProductItem" key={idx} obj={obj} idx={idx} slideIndex={slideIndex} numberOfItemsToShow={numberOfItemsToShow}/>
                    // <div className={`slide-div ${slideIndex === idx ? "active-slide" : slideIndex>idx ? "content" : ""}`} key={idx} style={{transform:`translate(-${slideIndex*24.5}vw)`, transitionDuration:"1s"}}>
                    //     <div className="AddToFavorites fa fa-heart-o"></div>
                    //     <img src={obj.image[imageNumberSlider]} alt=""/>
                    //     <p className="Slider-product-name">{obj.name}</p>
                    //     <p className="Slider-product-price">{obj.price}</p>
                    //     <div className="Slider-product-colors">
                    //     {obj.color ? obj.color.map((i,index)=>{
                    //     return <div className="LittleColor" key={index} style={{backgroundColor:i, width:"10px",height:"10px",borderRadius:"50%",display:"inline-block",margin:"0 2px"}}></div>
                    //     }) : ''}
                    //     </div> 
                    // </div>
                )
            })}
            </div>
            </div>
            {/* <div className="buttonsSkip">
                <button onClick={()=>scrollR()} className="buttonSlide next fa fa-chevron-right"></button>
                <button onClick={()=>scrollL()} className="buttonSlide prev fa fa-chevron-left"></button>
            </div> */}
        </div>
    );
    
}
export default Slider_products;