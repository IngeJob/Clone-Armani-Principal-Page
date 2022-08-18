import React from 'react';
import { BiShoppingBag } from "react-icons/bi";
import  './cart.css';

type CloseMenuProps = {
    closeMenuCart: () => void;
}

const MenuHamb = ({closeMenuCart}: CloseMenuProps) => {
  return (
    <div className='cart-container'>
        <h2>Your Shopping Bag is empty</h2>
        <BiShoppingBag className='cart-bag'/>
        <span className='close-menuCart'><button onClick={closeMenuCart} className='btn-menu'>X</button> </span>
    </div>
  )
}

export default MenuHamb