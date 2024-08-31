import React, { useContext } from 'react'
import './fooddisp.css'
import { StoreCon } from '../../context/StoreCon'
import Fooditem from '../fooditem/fooditem'
const Foodisp = ({category}) =>{

  const {food_list} = useContext(StoreCon)
  return (
    <div className='food-display' id='foodisp'>
<h2>Top dishes Exactly for you</h2>
<div className="food-display-list">
  {food_list.map((item, index)=>{
    if (category==='All' || category===item.category) {
      return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
    }
    
    
  })}
</div>

    </div>
  )
}

export default Foodisp