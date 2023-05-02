import React, { useEffect, useState } from 'react'
import { CustomCheckout } from '../Components/MainComponents'
import { useSelector } from 'react-redux';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';
import { Loading } from '../SubComponents';
const CheckoutPage = () => {
  const userLogin = useSelector((state) => state.dataStatic.userLogin);
  const menuOrder = secureLocalStorage.getItem("shippingCost");
  const [isLoading,setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
  if(!(userLogin._id && menuOrder && Object.keys(menuOrder).length !== 0)){
    navigate("/");
    
  }else{
    setIsLoading(false);
  }
  },[]);
  return (
    <>
    {isLoading ? <Loading full="true" /> : <CustomCheckout />}
    
    </>
  )
}

export default CheckoutPage