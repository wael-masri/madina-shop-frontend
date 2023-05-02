import React from 'react'
import { SubHeader } from '../SubComponents'
import { Wishlist } from '../Components/MainComponents'

const WishlistPage = () => {
  return (<>
  <SubHeader title="My Wishlist" first="Home" linkFirst="/" second="wishlist" />
  <Wishlist />
  </>
  
  )
}

export default WishlistPage