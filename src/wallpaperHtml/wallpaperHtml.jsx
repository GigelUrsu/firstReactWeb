import React, { useEffect, useState } from "react";
import porcheImageReflection from "./dataWallpaper/porcheImageReflection.png";
import ItemShow from "./itemShow";
import "./wallpaperHtml_css.css"

function WallpaperHtml(){

    const [timer,setTimer]=useState(100)
    const [showData,setShowData]=useState(false)

    useEffect(()=>{
        setInterval(() => {
            setTimer(currentTime())
        }, 1000);
    },[])
    function currentTime() {
        let date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        // let ss = date.getSeconds();
        if(hh === 0){
            hh = 12;
        }
         hh = (hh < 10) ? "0" + hh : hh;
         mm = (mm < 10) ? "0" + mm : mm;
        //  ss = (ss < 10) ? "0" + ss : ss;
        let time = hh + ":" + mm;
        // + ":" + ss + " "      
        return time;
      
      }

    return(
        <div className="wallpaper" style={{backgroundImage:`url(${porcheImageReflection})`,width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
            <div className="clock" onClick={()=>setShowData(!showData)}>{timer}</div>
            <div className="data">
                {showData?<ItemShow/>:''}
            </div>
        </div>
    )
}
export default WallpaperHtml;