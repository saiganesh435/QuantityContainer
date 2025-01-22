import React, { useState } from 'react'
import Total from './Total';
import CartItem from './CartItem';
import  '../App.css'; 

let cartItems = [
    { id: 1, label: "Noodles", price: 20, quantity: 1 },
    { id: 2, label: "Biryani", price: 90, quantity: 1 },
    { id: 3, label: "Soup", price: 10, quantity: 1 },
  ];
const CartContainer = () => {
    const [cart, setCart] = useState(cartItems);
   
      const changeQuantity=(id,value)=>{
        let UpdateCart=cart.map((item)=>{
            let newQuantity = item.quantity+value;
            newQuantity = newQuantity>1 ? newQuantity : 1;
            return item.id===id?{...item,quantity:newQuantity}:item;
        });
        setCart(UpdateCart);
      };
      const totalAmount = cart.reduce(function (bag,item){
        return bag + item.price*item.quantity;
      },0);
  return (
   <div className="maincart">
   { cart.map((item)=>{
    return(
        <CartItem key={item.id} {...item} changeQuantity={changeQuantity}/>
    );
   })
   }
   <Total totalAmount={totalAmount} />
   </div>
  );
};

export default CartContainer