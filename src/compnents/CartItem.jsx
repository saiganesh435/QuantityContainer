import React from 'react'
import LabelPrice from './LabelPrice'
import  '../App.css'; 
const CartItem = ({id, label, price, quantity,changeQuantity}) => {
  return (
    <div className="cartcontainer">
      <div>
      <LabelPrice label={label} price={price}/>
      </div>
        <div  className="button">
        <button onClick={()=> changeQuantity(id, -1)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=> changeQuantity(id, +1)}>+</button>
        </div>

    </div>
  )
}

export default CartItem