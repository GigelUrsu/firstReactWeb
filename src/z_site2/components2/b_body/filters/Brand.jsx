import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Filters_css.css"

function Brand(){
    const {queries} = useParams()
    const brands=["Nike","Adidas","Vans"]
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
    function addMiniProp(q,s1,s2){
        if(!q)return false;
        if(q.includes(s1)){
            let idx1=q.indexOf(`${s1}`)
            let idx2=q.indexOf('&',idx1)
            if(idx2===-1)idx2=q.length
            if(q.substring(idx1+1+s1.length,idx2).includes(s2)){
                let text2=q.substring(idx1+1+s1.length,idx2)
                let one = q.substring(0,idx1+1+s1.length)
                let two = q.substring(idx2,q.length)
                if(text2===`${s2}`)
                return (q.substring(0,idx1-1)+q.substring(idx2,q.length))
                let idx3=text2.indexOf(`${s2}`)
                let text3=text2.substring(0,idx3)
                let text4=text2.substring(idx3+s2.length,text2.length)
                let q2=one+text3+text4+two
                return q2
            }
            else{
                let text=q.slice(0,idx2)+`${s2}`+q.slice(idx2)
                return text;
            }
        }else{
            q=q+`&${s1}=${s2}`
            return q;
        }
    }
    function removeProp(q,s1){
        if(!q)return false;
        if(q.includes(s1)){
        let idx1=q.indexOf(`${s1}`)
        let idx2=q.indexOf('&',idx1)
        if(idx2===-1)idx2=q.length
        let one = q.substring(0,idx1-1)
        let two = q.substring(idx2,q.length)
        let q2=one+two
        return q2} else return q
    }
    return(
        <div className="BrandFilters">
            <p className="Title">Branduri</p>
            <div className="Branduri">
            {brands.map((item,index)=>{
                    return(
                        <Link key={index} className={getProp(queries,"brandCat")?getProp(queries,"brandCat").includes(`-${brands[index]}-`)?"a activee":"a":"a"} to={`/2/products/${addMiniProp(queries,"brandCat",`-${brands[index]}-`)}`}>{brands[index]}</Link>
                    )
                })}
            </div>
            <p className="line"></p>
            <div className="Reset">
                <p className="fa fa-refresh"></p>
                <Link className="resetButton" to={`/2/products/${removeProp(queries,"brandCat")}`}>Reseteaza</Link>
            </div>
        
        </div>
    )
}

export default Brand;
