import React from 'react'
import '../Paginate.css'
const Paginate = ({coinsPerPage,totalCoins,setCurrentPage,currentPage}) => {
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalCoins/coinsPerPage);i++){
    pageNumbers.push(i);
  }
    return (
    <div className='pagination'>
             {pageNumbers.map((page,index)=>{
                return <button key={index} onClick={()=>{setCurrentPage(page)}} className={page==currentPage ? 'active':''}>{page}</button>    
             })}
    </div>
  )
}

export default Paginate