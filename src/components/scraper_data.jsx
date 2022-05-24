import React from 'react';
import axios from 'axios';
import CsgoItem from './csgoItem';
import CoinInfo from './CoinInfo';
import './scraper_data_css.css'

class ScraperData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    items:[],
                    ready:false,
                    value2: '',
                    items2:[],
                    ready2:false,
                    selectat: ['all']
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.functia = this.functia.bind(this);
      this.selectChange = this.selectChange.bind(this);
      this.rezultat = this.rezultat.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

  
    async handleSubmit(event) {
      event.preventDefault();
      if(this.state.value){
      const name = this.state.value || 'ak'
      //console.log(name)
      let data = await axios.get(`/csgo/market/${name}`).then(res =>{
        return(res.data)
      })
      this.setState({ready:true})
      //console.log(this.state.items)
      this.showResult(data)
      }
    }


      async functia(event) {
        event.preventDefault();
        let data2 = await axios.get(`/crypto/prices`).then(res =>{
          return(res.data)
        })
        this.setState({ready2:true})
        //console.log(this.state.items)

        this.rezultat(data2)
      }

        rezultat(data){

          let data3=[]
          if(this.state.selectat[0]==='all')
            data3=data
          else if (this.state.selectat[0]==='top5')
            data3=data.slice(0,5)
          else if (this.state.selectat[0]==='top10')
            data3=data.slice(0,10)
          else if (this.state.selectat[0]==='top20')
            data3=data.slice(0,20)
          else
          {
            if(this.state.selectat)
            {
              for(let j=0;j<data.length;j++){
              for(let i=0;i<this.state.selectat.length;i++){
                if(data[j].coin_name.includes(this.state.selectat[i]))
                data3.push(data[j]) } }
            }
          }

          this.setState({items2:data3})
          console.log(data3)
          if(this.ready2)
          this.render()
        }
    
    showResult(data){
      this.setState({items:data})
    }

    //select
    selectChange(event) {
      if(event.target.value==='all'){
        this.setState({selectat:['all']}) }
      else if(event.target.value==='top5')this.setState({selectat:['top5']})
      else if(event.target.value==='top10')this.setState({selectat:['top10']})
      else if(event.target.value==='top20')this.setState({selectat:['top20']})
      else {
        if(!this.state.selectat.includes(event.target.value)){
          this.state.selectat.push(event.target.value)
          if(this.state.selectat.includes('all')){
          let idx = this.state.selectat.indexOf('all')
          this.state.selectat.splice(idx,1)}
          if(this.state.selectat.includes('top5')){
            let idx = this.state.selectat.indexOf('top5')
            this.state.selectat.splice(idx,1)}
            if(this.state.selectat.includes('top10')){
              let idx = this.state.selectat.indexOf('top10')
              this.state.selectat.splice(idx,1)}
              if(this.state.selectat.includes('top20')){
                let idx = this.state.selectat.indexOf('top20')
                this.state.selectat.splice(idx,1)}
        }
        else{
          let idx = this.state.selectat.indexOf(event.target.value)
          this.state.selectat.splice(idx,1)
        }
      }
    }
  

  
    render() {
         let data = null
         let data2 = null
         if(this.state.ready){
         //this.state.ready= !this.state.ready
         data=this.state.items.map((items) => {
           return <CsgoItem key={items.id} name={items.title} price={items.price} />
       }) }
       if(this.state.ready2){
         data2=this.state.items2.map((items2)=>{
           return <CoinInfo key={items2.rank}  rank={items2.rank} coin_name={items2.coin_name} coin_price={items2.coin_price}   procent1={items2.procent1}  procent2={items2.procent2} />
         })
       }
    
     
      return (
          <div>
            <div className='Entries'>
        <form className='csEntry' onSubmit={this.handleSubmit}>
          <label>
            CSGO ITEMS:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form className='cryptoSubmit' onSubmit={this.functia}>
          <label>
            CRYPTO:
            {/* <input type="text" value={this.state.value2} /> */}
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form className='cryptoFilters' onSubmit={this.functia}>
        <label>
          CRYPTO FILTERS:
          <select className='cryptoFiltersList' multiple={true} value={this.state.selectat} onChange={this.selectChange}>
            <option value="all">All</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Binance Coin">Binance Coin</option>
            <option value="CRO">CRO</option>
            <option value="Elrond">Elrond</option>
            <option value="top5">Top 5</option>
            <option value="top10">Top 10</option>
            <option value="top20">Top 20</option>
          </select>
        </label>
        <input type="submit" value="REFRESH" />
      </form>
      </div>

        <div className='contents'>
          <div className='csgoCards'>{data}</div>
          <div className='coinCards'>{data2}</div>
        </div>
         {/*{data}*/}
         {/*{data2}*/}
        </div>
      );
    }
  }
  export default ScraperData

  // handleSubmit2(event) {
    //   const name = this.state.value
    //   event.preventDefault();
    //   function getWebScraperData(name){
    //       axios.get(`/csgo/market/${name}`).then(res =>{
    //         res.data.map((items)=>{
    //           return <ItemInfo key={items.id} name={items.name} price={items.price} />
    //         })
    //         //return(res.data)
    //       }).catch(error =>{
    //           console.log(error)
    //           return('error :(')
    //       })
    //     }
    //     const data = getWebScraperData(name)
    //     this.setState({items:data})
    //     this.setState({ready:true})
    // }


    //*********filtru care acum este in functie REZULTAT*********
    // selectSubmit(event) {
    //   let data3=[]
    //   //console.log(this.state.selectat)
    //  if(this.state.items2){
    //     for(let j=0;j<this.state.items2.length;j++){
    //       //console.log(this.state.items2[j].coin_name)
    //     for(let i=0;i<this.state.selectat.length;i++){
    //         if(this.state.items2[j].coin_name.includes(this.state.selectat[i]))
    //         //console.log(this.state.items2[j])
    //         data3.push(this.state.items2[j])
    //     }
    //   }
    //  }
    //   console.log(data3)
    //   event.preventDefault();
    //   //return(data3)
    // }