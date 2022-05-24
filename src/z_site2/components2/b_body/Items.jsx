import React from "react";
// import ItemsData from "../../data2/items.json"
import ItemCard from "./itemCard";
import "./items_css.css"
import item_data from "../../data2/items-data";

function Items({queries}){
    const params = new URLSearchParams(queries)
    function checkQuery(item){
        // console.log(item)
        // if(item.category.includes(params.get('category')) || item.category.includes(params.get('sub_category1')))
        if(params)
        if(item.gen===params.get("gen"))
        if(params.get("sub_ctgr1"))
            if(item.category.includes(params.get("sub_ctgr1")))
            return true;
            else return false;
        else if(params.get("ctgr2"))
            if(item.category.includes(params.get("ctgr2")))
            return true;
            else return false;
        else if(params.get("ctgr"))
            if(item.category.includes(params.get("ctgr")))
            return true;
            else return false;
        else return false;
        else return false;
    }
    const result = item_data.filter(checkQuery)

    return(
        <div className="Items">
            {result.map((item,index)=>{
                return <ItemCard className="Card" key={index} name={item.name} id={item.id} price={item.price} item={item}/>
            })}
        </div>
    )
    
}

export default Items;