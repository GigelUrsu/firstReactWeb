import React from "react";
import { useState } from "react/cjs/react.development";
import {Link ,NavLink} from 'react-router-dom';
import "./header_home_css.css";
import categoriiHeader from "../../../z_site2/data2/categorii";

function HeaderHome(){

    const [genSelect,setGenSelect]=useState(0)

    //function GenSelectat(){
        // if(genSelect===0){
        //     return(<>
        //     <Link to={`/2/products/gen=man&ctgr=noutati`}>Noutati</Link><Link to={`/2/products/gen=man&ctgr=outfituri`}>Outfituri</Link><Link to={`/2/products/gen=man&ctgr=imbracaminte`}>Imbracaminte</Link><Link to={`/2/products/gen=man&ctgr=incaltaminte`}>Incaltaminte</Link><Link to={`/2/products/gen=man&ctgr=accesorii`}>Accesorii</Link><Link to={`/2/products/gen=man&ctgr=branduri`}>Branduri</Link><Link to={`/2/products/gen=man&ctgr=reduceri`}>Reduceri</Link>
        //     </>)
        // }
        // else if(genSelect===1){
        //     return(<>
        //         <Link to={`/2/products/gen=woman&ctgr=noutati`}>Noutati</Link><Link to={`/2/products/gen=woman&ctgr=outfituri`}>Outfituri</Link><Link to={`/2/products/gen=woman&ctgr=imbracaminte`}>Imbracaminte</Link><Link to={`/2/products/gen=woman&ctgr=incaltaminte`}>Incaltaminte</Link><Link to={`/2/products/gen=woman&ctgr=accesorii`}>Accesorii</Link><Link to={`/2/products/gen=woman&ctgr=branduri`}>Branduri</Link><Link to={`/2/products/gen=woman&ctgr=reduceri`}>Reduceri</Link>
        //         </>)
        // }
        // else {
        //     return(<>
        //        <Link to={`/2/products/gen=child&ctgr=imbracaminte`}>Imbracaminte</Link><Link to={`/2/products/gen=child&ctgr=incaltaminte`}>Incaltaminte</Link><Link to={`/2/products/gen=child&ctgr=reduceri`}>Reduceri</Link>
        //         </>)
        // }
    //}

    return(
        <div className="Header_home">
            <div className="Row1">
                <div className="Stanga">
                    <div className="Filtre">
                        <p onClick={()=>setGenSelect(0)}>Barbati</p>
                        <p onClick={()=>setGenSelect(1)}>Femei</p>
                        <p onClick={()=>setGenSelect(2)}>Copii</p>
                    </div>
                    <div className="Meniu">
                        <p className="ImagineMeniu fa fa-bars"></p>
                        <p className="meniu">Meniu</p>
                    </div>
                </div>
                
                <div className="Logo_header">
                    <Link to="/" style={{textDecoration:"none",color:"unset"}}>
                    <p className="logo_header">Magazin Online</p>
                    </Link>
                </div>
                <div className="Dreapta">
                    <p className="fa fa-user-o"></p>
                    <p className="fa fa-bell-o"></p>
                    <p className="fa fa-heart-o"></p>
                    <p className="fa fa-shopping-cart"></p>
                </div>
            </div>

            <div className="Row2">
                <div className="Categorii">
                    { Object.keys(categoriiHeader[genSelect].sub_ctgr1).map((item,index)=>{
                        return(
                            <NavLink key={index} className={"ctgrHeader"} style={({isActive})=>{return{textDecoration:isActive?"underline":"none"}}}  to={`/2/products/gen=${genSelect===0?"man":genSelect===1?"woman":"child"}&ctgr=${item}`}>{item}</NavLink>
                        )
                    })
                    }
                </div>
                <div className="Search">
                    <p className="fa fa-search imagineSearch"></p>
                    <p className="searchBar">Cauta branduri, categorii sau produse</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome;