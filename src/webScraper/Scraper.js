const PORT=8000
const express=require("express")
const axios=require("axios")
const cheerio=require("cheerio")

const app = express()


//price constructor
class Pricesss{
    constructor(rank,coin_name,coin_price,procent1,procent2,market_cap){
        this.rank=rank || 'rank';
        this.coin_name=coin_name ||'coin_name';
        this.coin_price=coin_price || 'coin_price'
        this.procent1=procent1 || 'procent1';
        this.procent2=procent2 || 'procent2';
        this.market_cap=market_cap || 'market_cap';

    }
    deliver() {
        let rank=this.rank
        let coin_name=this.coin_name
        let coin_price=this.coin_price
        let procent1=this.procent1
        let procent2=this.procent2
        let market_cap=this.market_cap
        const to_deliver={
            rank,
            coin_name,
            coin_price,
            procent1,
            procent2,
            market_cap,
        }
        return to_deliver
    }
}



const item=[]

app.get('/csgo/market/:item_name', (req,res)=>{
    const itemName = "&q="+req.params.item_name
    axios.get(`https://steamcommunity.com/market/search?appid=730${itemName}`)
        .then((response)=>{
            
            const html=response.data
            const $ = cheerio.load(html)
            const title = $('.market_listing_row.market_recent_listing_row.market_listing_searchresult',html).first().attr('data-hash-name')
            const price = $('.market_listing_row.market_recent_listing_row.market_listing_searchresult',html).first().find('span .normal_price').first().text()
            if(price){
            item.push({
                id:item.length,
                title,
                price
            })
        }
            res.json(item)
        })
})




app.get('/crypto/prices', (req,res)=>{
    const coins=[]
    axios.get(`https://coinmarketcap.com/`)
        .then((response)=>{
            //console.log('https://coinmarketcap.com/...')
            const html=response.data
            const $ = cheerio.load(html)
            $('tbody tr',html).each((parentIdx,parentElem)=>{
                let coin2=[]
                if(parentIdx <= 49){
                    if(parentIdx>9)
                    coin2[0]=`${parentIdx+1}`
                    $(parentElem).children().each((childIdx,childElem)=>{
                        if(childIdx <= 6){
                            if($(childElem).text())
                                coin2.push($(childElem).text())
                                
                        }
                    }
                    )
                    const coin_constructed = new Pricesss(coin2[0],coin2[1],coin2[2],coin2[3],coin2[4],coin2[5]).deliver()
                    coins.push(coin_constructed)
                    //console.log(coin_constructed)
                }
                
            }
            ) 
            res.json(coins)
        }
        )
    })

app.listen(PORT, ()=>console.log(`server running on PORT ${PORT}`))
