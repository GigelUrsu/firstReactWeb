import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import item_data from "../../data2/items-data";
import "./itemPage_css.css"

function ItemPage(){
    const {queries} = useParams()
    const params = new URLSearchParams(queries)
    const [slideIndex, setSlideIndex] = useState(1)
    const [marime,setMarime]=useState('M')
    const [showmarime,setShowMarime]=useState(0)
    const culoriref=useRef(null)
    const imaginiref=useRef(null)
    const scrollculori = (scrollOffset) => {
        culoriref.current.scrollLeft += scrollOffset;
      };
      const scrollimagini = (scrollOffset) => {
        imaginiref.current.scrollLeft += scrollOffset;
      };

        function checkQuery(item){
            if(params)
            if(item.category[item.category.length-1]===params.get("category") && item.gen===params.get("gen") && item.name===params.get("name") && item.color[0]===params.get("color"))
            return true
            else return false
            else return false
        }
        const result = item_data.filter(checkQuery)
         
        function nextSlide(){
    
            if(slideIndex !== result[0].image.length){
                setSlideIndex(slideIndex + 1)
            }
            else if(slideIndex === result[0].image.length){
                setSlideIndex(1)
            }
        }
    
        function prevSlide(){
            
            if(slideIndex !== 1){
                setSlideIndex(slideIndex - 1)
            }
            else if(slideIndex === 1){
                setSlideIndex(result[0].image.length)
            }
        }

        useEffect(()=>{
            culoriref.current.scrollLeft=0;
            imaginiref.current.scrollLeft=0;
        },[])

    return(<>
        {result.length?<div className="itemPage">
            <div className="contentItemPage">
            <div className="left">

                <div className="imagebuttons">
                    <div className="imagebutton left fa fa-chevron-left" onClick={() => scrollimagini(-imaginiref.current.offsetWidth)}></div>
                    <div className="imagebutton rigth fa fa-chevron-right" onClick={() => scrollimagini(imaginiref.current.offsetWidth)}></div>
                </div>
            <div className="images" ref={imaginiref}>
                {result[0].image.map((item,index)=>{return(<img className={slideIndex===index+1 ?`itemPageImg active`:'itemPageImg'} key={index} src={item} alt=""/>)})}
            </div>
            <button onClick={()=>nextSlide()} className="buttonSlide next fa fa-chevron-right"></button>
            <button onClick={()=>prevSlide()} className="buttonSlide prev fa fa-chevron-left"></button>

            <div className="container-dots">
                {Array.from({length:result[0].image.length}).map((item,idx)=>{
                    return(
                        <div onClick={()=>setSlideIndex(idx+1)} key={idx} className={slideIndex===idx+1 ? "dot active-dot" : "dot"}>
                        </div>
                    )
                })}
            </div>
            {/* {result[0].image.map((item,index)=>{return(<img className={`itemPageImg`} key={index} src={item} alt=""/>)})} */}
            </div>
            <div className="info">
                <p className="nume" >{result[0]["name"]}</p>
                <p className="pret">{`${result[0]["price"]} lei`}</p>
                <div className="marime">
                    <p className="marimeTitle">Marime</p>
                    <p className="marimeAleasa" onClick={showmarime===0?()=>setShowMarime(1):()=>setShowMarime(0)}>{marime}</p>
                    <div className="marimi" style={{display:`${showmarime?'unset':'none'}`}}>{result.length?result[0]["size"].map((item,index)=>{return(<p key={index} onClick={()=>{setMarime(`${Object.keys(item)}`); setShowMarime(0);}} className={index===2?`itemPageSizes`:`itemPageSizes`}>{`${Object.keys(item)} : ${Object.values(item)}`}</p>)}):''}</div>
                </div>
                <div className="culoare">
                    <p className="colorname"><span className="title">Culoare: </span>{result[0]["colorname"]}</p>
                    <div className="colorbuttons">
                        <div className="colorbutton left fa fa-chevron-left" onClick={() => scrollculori(-culoriref.current.offsetWidth)}></div>
                        <div className="colorbutton rigth fa fa-chevron-right" onClick={() => scrollculori(culoriref.current.offsetWidth)}></div>
                    </div>
                </div>

                <div className="culori" ref={culoriref}>{result[0]["color"].map((item,index)=>{
                    function checkQuery2(it){
                        if(it.category[it.category.length-1]===result[0]["category"][result[0].category.length-1] && it.gen===result[0].gen && it.name===result[0].name && it.color[0]===item)
                        return true
                        else return false
                    }
                    let result2 = item_data.filter(checkQuery2)
                    return(<Link key={index} className={`itemPageColors`} to={`/2/item/gen=${result[0]["gen"]}&category=${params.get("category")}&name=${result[0]["name"]}&color=${item}`}>{<div className="color" style={{padding:'0 5px'}}>{result2.length?<img src={result2[0].image[0]} alt=""/>:<div className="litcollor" style={{backgroundColor:`#${item}`,width:'20px',height:'20px',borderRadius:'50%'}}/>}</div>}</Link>)})}</div>
                <div className="buy">Cumpara</div>
            </div>
            </div>
        </div>:''}
        </>
    )
}

export default ItemPage;