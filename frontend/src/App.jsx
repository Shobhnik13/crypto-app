import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Coin from './Components/Coin';

function App() {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('')
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res =>{
        setCoins(res.data)
        console.log(res.data)
      })
      .catch(error=>console.log('error'))
  }, [])
  //filtering all the coins as per teh serach input basis and saving in filteredCoins
  const filteredCoins=coins.filter((coin)=>{
    coin.name.toLowerCase().includes(search.toLowerCase())
  })
  //adding the mapping of serach->filter(added by user in bar) with the component having the same filter as user entered and show that compnnet and pass data in it

  return (
    <div className="App">
      <div className="coin-search">
    <h1 className="coin-text">Search a currency</h1>
        <form>
      <input type="text" placeholder='Search'className='coin-input' name='' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </form>
      </div>
      {filteredCoins.map((item)=>{
        return(
          <Coin 
          key={item.id}
          name={item.name}
          image={item.image}
          symbol={item.symbol}
          volume={item.market_cap}
          price={item.current_price}
          />
        )
      })}
    </div>
  )
}

export default App
