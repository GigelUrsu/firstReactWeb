import React, { useEffect, useRef, useState } from "react";
import "./itemShow_css.css"
import axios from 'axios';

    // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const delay = 2500;

function ItemShow() {
  const [index, setIndex] = useState(0);
  const [datalist,setdatalist]=useState([])
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === datalist.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index,datalist.length]);

  useEffect(()=>{
    axios.get(`/crypto/prices`).then(res =>{
        setdatalist(old=>[...old,...res.data.slice(0,45)])
      })
  },[])

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {datalist.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          >{`${backgroundColor.rank} : ${backgroundColor.coin_name} : ${backgroundColor.coin_price} : ${backgroundColor.procent1} : ${backgroundColor.procent2}`}</div>
        ))}
      </div>

      <div className="slideshowDots">
        {datalist.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ItemShow;