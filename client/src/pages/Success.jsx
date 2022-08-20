import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import { emtyProductCart } from '../redux/cartSlice';
import { userRequest } from '../requestAxiosMethod';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
const BackToHomeButton = styled.button`
    padding: 10px;
    margin-top: 20px;
`


export default function Success() {
    
    const data = useSelector((state)=> state.cart.stripeData);
    const currentUser = useSelector((state) => state.user.currentUser);
    const cart = useSelector((state)=> state.cart)
    const [orderId, setOrderId] = useState();
  console.log(orderId);
    useEffect(() => {
      const createOrder = async () => {
        try {
          const response = await userRequest.post("/orders", {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item.orderedQuantity,
            })),
            amount: cart.total ,
            address: data.billing_details.address,
          });
              console.log(response)
              setOrderId(response.data._id)
              console.log(orderId);
          
        } catch (error){console.log(error)}
      };
      data && createOrder();
    }, [cart.stripeData]);
  
  return (
      <Container>
      {orderId? (`Your Order has been created successfully, your Order ID is ${orderId}`): ('Loading............Please Wait')}
      <BackToHomeButton>Home Page</BackToHomeButton>
    </Container>
  )
}
