import React from 'react'
import { SubHeader } from '../SubComponents'
import { Cart } from '../Components/MainComponents'



const CartPage = () => {
  return (<>
  <SubHeader title="My Cart" first="Home" linkFirst="/" second="Cart" />
    <Cart />
  
  </>

  )
}

export default CartPage