import React, { useEffect, useState } from "react";
//import Images from "../../data2/images";
import Items from "./Items";
import "./body_1_css.css";
import { useParams , NavLink, Link, Outlet} from 'react-router-dom';
import categorii from "../../data2/categorii";
// import { useEffect } from "react/cjs/react.development";
import Size from "./filters/Size";
import Color from "./filters/Color";
import Brand from "./filters/Brand";
import Pret from "./filters/Pret";

function Body1(){

    const {queries} = useParams()    
    const [filterClicked,setFilterClicked]=useState('')
    const [categoryIndex,setCategoryIndex]=useState(0)
    function changeProp(q,s1,s2){
        if(s1==="ctgr" && q.includes("sub_ctgr1"))
        q = removeProp(q,"sub_ctgr1")
        let idx1=q.indexOf(`${s1}`)
        let idx2=q.indexOf('&',idx1)
        if(idx2===-1)idx2=q.length
        let one = q.substring(0,idx1+s1.length+1)
        let two = q.substring(idx2,q.length)
        let q2=one+s2+two
        return q2
    }
    function addProp(q,s1,s2){
        if(!q.includes(s1)){
            // q.push(`&${s1}=${s2}`)
            q=q+`&${s1}=${s2}`
            return q;
        }
        else return changeProp(q,s1,s2)
    }
    function removeProp(q,s1){
        if(q.includes(s1)){
        let idx1=q.indexOf(`${s1}`)
        let idx2=q.indexOf('&',idx1)
        if(idx2===-1)idx2=q.length
        let one = q.substring(0,idx1-1)
        let two = q.substring(idx2,q.length)
        let q2=one+two
        return q2} else return q
    }
    function getProp(q,s1){
        if(!q)return false;
        let idx1=q.indexOf(`${s1}`)
        if(idx1>=0){
            let idx2=q.indexOf('&',idx1)
            if(idx2===-1)idx2=q.length
            let one = q.substring(idx1+1+s1.length,idx2)
            return one;
        }else return false;
    }
    useEffect(()=>{
        if(getProp(queries,"gen")==="man")
        setCategoryIndex(0)
        else if(getProp(queries,"gen")==="woman")
        setCategoryIndex(1)
        else if(getProp(queries,"gen")==="child")
        setCategoryIndex(2)
        else if(getProp(queries,"gen")==="designer")
        setCategoryIndex(3)
        else if(getProp(queries,"gen")==="designerr")
        setCategoryIndex(4)
        else
        setCategoryIndex(0)
    },[queries])
    return(
        <div className="Body1">
            <Outlet/>
            <div className="content">

            <div className="Categorii">
                {
                    categorii[categoryIndex].sub_ctgr1[`${getProp(queries,"ctgr")}`]?Object.keys(categorii[categoryIndex].sub_ctgr1[`${getProp(queries,"ctgr")}`]).map((item,index)=>{
                        return  (
                            <div key={index}>
                            <Link className={getProp(queries,"ctgr2")===item?`categorii2 active`:"categorii2"} to={!getProp(queries,"ctgr2")?`/2/products/${queries}&ctgr2=${item}`:getProp(queries,"ctgr2")===`${item}`?`/2/products/${removeProp(removeProp(queries,"ctgr2"),"sub_ctgr1")}`:`/2/products/${removeProp(changeProp(queries,"ctgr2",`${item}`),"sub_ctgr1")}`}>{item}</Link>
                            {
                                getProp(queries,"ctgr2")===`${item}`?categorii[categoryIndex].sub_ctgr1[`${getProp(queries,"ctgr")}`][item].map((item2,index2)=>{
                                    return <NavLink className={getProp(queries,"sub_ctgr1")===item2?`categoriiMulte active`:"categoriiMulte"} key={index2} to={queries? `/2/products/${addProp(queries,"sub_ctgr1",`${item2}`)}` :`/2/products/sub_ctgr1=${item2}`}>{item2}</NavLink>
                                }):""
                            }
                            </div>
                        )
                    }):categorii[categoryIndex].collections[`${getProp(queries,"ctgr")}`]?categorii[categoryIndex].collections[`${getProp(queries,"ctgr")}`]["items"].map((item,index)=>{
                        return  (
                            <div key={index}>
                            <Link className={getProp(queries,"ctgr2")===item?`categorii2 active`:"categorii2"} to={!getProp(queries,"ctgr2")?`/2/products/${queries}&ctgr2=${item}`:getProp(queries,"ctgr2")===`${item}`?`/2/products/${removeProp(queries,"ctgr2")}`:`/2/products/${changeProp(queries,"ctgr2",`${item}`)}`}>{item}</Link>
                            </div>
                        )
                    }):window.location.href.includes("products")?'404':''
                }

            </div>
            <div className="Space2">
            {window.location.href.includes("products")&&<div className="UpMore">
                <div className="location">
                {/* <p className="Location">Location:</p> */}
                {getProp(queries,"ctgr")?<Link to={`/2/products/${removeProp(removeProp(queries,"ctgr2"),"sub_ctgr1")}`}>{`${getProp(queries,"ctgr")}`}</Link>:''}
                {getProp(queries,"ctgr2")?<Link to={`/2/products/${removeProp(queries,"sub_ctgr1")}`}>{`> ${getProp(queries,"ctgr2")}`}</Link>:''}
                {getProp(queries,"sub_ctgr1")?<Link to={`/2/products/${queries}`}>{`> ${getProp(queries,"sub_ctgr1")}`}</Link>:''}
                </div>
                <div className="FilterButton">
                <p className="fa fa-unsorted"></p>
                <p>Sorteaza</p>
                </div>
            </div>
            }
            {/* onMouseEnter={()=>setFilterClicked("size")} onMouseLeave={()=>setFilterClicked("")} */}
            {window.location.href.includes("products")&&<div className="More">
                <div className="Size" >
                    <p className="BigFilter" onClick={filterClicked?filterClicked==="size"?()=>setFilterClicked(""):()=>setFilterClicked("size"):()=>setFilterClicked("size")}>Marime</p>
                    <div className={filterClicked==="size"?"Onclick onSize active":"Onclick onSize"}><Size/></div>
                </div>
                <div className="Color" >
                    <p className="BigFilter" onClick={filterClicked?filterClicked==="color"?()=>setFilterClicked(""):()=>setFilterClicked("color"):()=>setFilterClicked("color")}>Culoare</p>
                    <div className={filterClicked==="color"?"Onclick onColor active":"Onclick onColor"}><Color/></div>
                </div>
                <div className="Brand" >
                    <p className="BigFilter" onClick={filterClicked?filterClicked==="brand"?()=>setFilterClicked(""):()=>setFilterClicked("brand"):()=>setFilterClicked("brand")}>Brand</p>
                    <div className={filterClicked==="brand"?"Onclick onBrand active":"Onclick onBrand"}><Brand/></div>
                </div>
                <div className="Price" >
                    <p className="BigFilter" onClick={filterClicked?filterClicked==="price"?()=>setFilterClicked(""):()=>setFilterClicked("price"):()=>setFilterClicked("price")}>Pret</p>
                    <div className={filterClicked==="price"?"Onclick onPrice active":"Onclick onPrice"}><Pret/></div>
                </div>
                <div className="Sale" >
                    <p className="BigFilter" onClick={filterClicked?filterClicked==="sale"?()=>setFilterClicked(""):()=>setFilterClicked("sale"):()=>setFilterClicked("sale")}>Reducere</p>
                    <div className={filterClicked==="sale"?"Onclick onSale active":"Onclick onSale"}>Onclick</div>
                </div>
            </div>}
            {window.location.href.includes("products")&&<div className="ItemsContainer">
                <Items queries={queries}/>
            </div>
            }
            </div>
            
            </div>   
        </div>
    )
}
export default Body1