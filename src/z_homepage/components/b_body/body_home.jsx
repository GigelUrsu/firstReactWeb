import React from "react";
import BannerHome from "./banner_home";
import SliderProducts from "./slider_products";
import "./body_home_css.css";
import CategoryImage from "./category_image";
import SliderCategories from "./slider_categories";

function BodyHome(){
    return(
        <div>
            <BannerHome />
            <CategoryImage gen={"woman"} ctgr={"one"} title={'title'} description={"description"}/>
            <SliderProducts title={"News"} seeAll={"Categorie"}/>
            <SliderCategories gen={"woman"} ctgr={["one","two","three","four","oneg","twog","threeg","fourg"]} title={'title'} description={"description"}/>
            <SliderProducts title={"Top"}/>
            <CategoryImage gen={"woman"} ctgr={"two"} title={'title'} description={"description"}/>
            <SliderProducts title={"Releases"}/>
        </div>
    )
}

export default BodyHome;