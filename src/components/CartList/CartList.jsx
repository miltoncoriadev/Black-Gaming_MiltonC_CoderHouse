import React from 'react'
import { addCart, removeCart, incrementAmount } from "../../redux/features/cart/cartSlice";
import { useEffect, useState } from "react"
import CartCard from "../CartCard/CartCard"

// * Hooks
import useCart from '../../hooks/useCart';

// * Components
import Spinner from "../../components/Spinner/Spinner"

import './CartList.css'

const CartList = () => {
  const { cartItems, isLoading } = useCart();

  return (
    <div className='flex-list-cart'>
      {isLoading ? <Spinner /> :
        cartItems ? cartItems.map((item) => {
          return (
            <div className='div-items-cart' key={item.id}>
              <CartCard item={item} />
            </div>
          )
        }) : null}

      <div className='div-total'></div>
    </div>
  )
}

export default CartList