import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { emtyProductCart } from '../redux/cartSlice';
import { userRequest } from '../requestAxiosMethod';


// importing icons from mui5 libaray...
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styling...
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
const OrderMessage = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`
const BackToHomeButton = styled.button`
    padding: 10px 15px;
    margin-top: 20px;
    background-color: yellow;
    border: none;
    border-radius: 10px;
    font-weight: 500;
`


export default function Success() {
    
    const data = useSelector((state)=> state.cart.stripeData);
    const currentUser = useSelector((state) => state.user.currentUser);
    const cart = useSelector((state)=> state.cart)
    const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch()
    
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
              setOrderId(response.data._id)
        } catch (error){console.log(error)}
      };
      cart && data && createOrder();
      dispatch(emtyProductCart())
    }, [cart.stripeData]);
  return (
    <Container>
      <OrderMessage>
        {orderId ? (<><CheckCircleIcon style={{color: 'green', fontSize: '90px', marginBottom: '25px'}} /> Your Order has been created successfully, Order ID is <span style={{color: 'green', fontSize: '20px', fontWeight: 'bold'}}>{orderId}</span></>): ('Loading............Please Wait')}
      </OrderMessage>
      <Link to='/'>
      <BackToHomeButton>Home Page</BackToHomeButton>
      </Link>
    </Container>
  )
}
