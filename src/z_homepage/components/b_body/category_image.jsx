import React from "react";
import { Link } from "react-router-dom";
import item_data from "../../../z_site2/data2/items-data";
import "./category_image_css.css"
function CategoryImage({gen,ctgr,title,description}){

    return(
        <div className="categoryImage">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            <Link className="link_all" to={`/2/products/gen=${gen}&ctgr=${ctgr}`}>
            <div className="all">
            <div className="left">
                <div className="text">
                    <div className="title">{gen}</div>
                    <div className="moreText">More Text</div>
                    <button>Catre</button>
                </div>
            </div>
            <div className="right">
                <img src={item_data[0]["image"][0]} alt="" />
                <div className="text">
                    <div className="title">Title</div>
                    <div className="moreText">More Text</div>
                    <button>Catre</button>
                </div>
            </div>
            </div>
            </Link>
        </div>
    )
}
export default CategoryImage;