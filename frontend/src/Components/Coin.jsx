import React from 'react'
import '../Coin.css'
const Coin = ({name,image,symbol,price,volume,priceChange,marketCap,loading}) => {
  if(loading){
    return <h2>Loading data please wait....</h2>
  }
  return (
    <div>
        <div className="coin-container">
            <div className="coin-row">
                 <div className="coin">
                    <img src={image} alt="error404" />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                 </div>
                 <div className="coin-data">
                  <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange>0 ? (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>) :  (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)}
                 <p className='coin-marketCap'>Mkt cap:${marketCap.toLocaleString()}</p>
                 </div>
            </div>
        </div>
    </div>
  )
  
}
export default Coin
