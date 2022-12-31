import React from 'react'

const Coin = ({name,image,symbol,price,volume,priceChange}) => {
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
                    {/* {priceChange < '0' ? <p className='price-red'> {priceChange.toFixed(2)}% </p> : <p className='price-green'>{priceChange.tofixed(2)}%</p> } */}
                 </div>
            </div>
        </div>
    </div>
  )
  
}
export default Coin
