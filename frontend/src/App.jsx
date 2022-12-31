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
  },[])
  const handleChange=e=>{
      setSearch(e.target.value)
  }
  //filtering all the coins as per teh serach input basis and saving in filteredCoins
  const searchedCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  //adding the mapping of serach->filter(added by user in bar) with the component having the same filter as user entered and show that compnnet and pass data in it

  return (
    <div className="App">
      <div className="coin-search">
    <h1 className="coin-text">Search a currency</h1>
        <form>
      <input type="text"
       placeholder='Search'
       className='coin-input' 
       onChange={handleChange}
       />
        </form>
      </div>
      {searchedCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketCap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        )
      })}
    </div>
  )
}

export default App
