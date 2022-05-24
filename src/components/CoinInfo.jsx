import React from "react";
import './CoinInfo_css.css'

function CoinInfo({rank, coin_name, coin_price, procent1, procent2}){
    return(
        <div className="card">
            <p>{rank}. {coin_name} : {coin_price}</p>
            <p>{procent1!=='procent1' ? `24h : ${procent1}` : ''}</p>
            <p>{procent2!=='procent2' ? `7d : ${procent2}` : ''}</p>
        </div>
    )
}
export default CoinInfo

// style={{backgroundColor:'#a3993e', color:'black', margin:'3px 3px 20px', border:'solid 3px black', borderRadius:"50px 0px 0px 10px", padding:'2px', justifyContent:'center', textAlign:'center'}}