import React from 'react'
import CartList from '../../components/CartList/CartList'

import './CartPage.css'

const CartPage = () => {
  return (
    <div className='CartPage'>
      <h1 className='title-cart'>Carrito</h1>
      <CartList/>
    </div>
  )
}

export default CartPage