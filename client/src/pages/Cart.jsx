import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Offers from '../components/Offers'

// import required image from images folder...
import hover from '../images/hover.jpg'
import lcd from '../images/lcd.jpg'
import iron from '../images/iron.jpg'

// import Icons from mui5 library...
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// import Confetti for celebration effects...
import Confetti from 'react-confetti'

// responsive for Cart page...
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'

// Styling...
const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 25px;
    ${mobile({padding:'10px 0px', margin: '0px 10px'})}
    
`
const Title = styled.h1`
    text-align: center;
    font-weight: 300;
`
const TopContaier = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    margin: 0px 25px;
    ${mobile({padding: '0px', margin: '25px 10px'})}
`
const TopConatinerButton = styled.button`
    cursor: pointer;
    font-weight: 700;
    padding: 15px;
    border: ${props => props.type === 'bgfilled' && 'none'};
    background-color: ${props => props.type === 'bgfilled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'bgfilled' ? 'white' : 'black'};
    
`
const TopContainerDetails = styled.div`
    
`
const TopContainerText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: underline;
    ${mobile({display:'none'})}
`
const BottomContainer = styled.div`
    display: flex;
    ${mobile({flexDirection:'column'})}
    justify-content: space-between;
`
const ProductInfo = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px;
    ${mobile({flexDirection: 'column'})}
`
const ProductWrapper = styled.div`
    flex:2;
    display: flex;
    

`
const ProductImage = styled.img`
    width: 50%;
    ${mobile({ width: '45%'})}
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    ${mobile({padding: '0px 10px 0px 25px', justifyContent: 'none'})}
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
    ${mobile({width:'15px', height:'15px'})}
`
const ProductSize = styled.span`
    
`
const PriceDetails = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({ flexDirection:'row', justifyContent: 'space-between' , margin: '0px 35px'})}
    
`
const ProductQuantityContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${mobile({margin: '0px 35px 0px 0px'})}
`

const Quantity = styled.span`
    margin: 10px;
    font-size: 25px;
`
const ProductPrice = styled.span`
    font-weight: 400;
    font-size: 35px;
    ${mobile({fontSize: '25px'})}
`
const HorizontalLine = styled.hr`
    border:none;
    background-color: #b0adad;
    height: 1px;
`
const ProductSummary = styled.div`
    flex: 1;
    height: 50vh;
    padding: 25px;
    border: 1px solid #b0adad;
    border-radius: 10px;
`
const SummaryTitle = styled.h1`
    
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'net' && '700'};
    font-size: ${props=> props.type === 'net' && '25px'};
    margin: 30px 0px;
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const CheckOutButton = styled.button`
    padding: 15px;
    width: 100%;
    font-size: 20px;
    ${mobile({backgroundColor: 'yellow', border: 'none'})}

    &:hover{
        transform: scale(0.9);
        background-color: aqua;
        border:none;
        border-radius: 19px;
        transition: all 0.25s ease;
    }

    &:active{
        font-weight: bold;

    }
`

// Cart react functional component...
export default function Cart() {
    // ########################################################
    // handling confetti hooks...
    const confettiRef = useRef(null) // to determine the ref location of confetti...
    const [startConfetti, setStartConfetti] = useState(false) // to toggle start and close confetti show...
    const [confettiWidth, setConfettiWidth] = useState(null) // to get the width of the displayed div...
    const [confettiHeight, setConfettiHeight] = useState(null) // to get the height of displayed div...

    // getting current height and width by useEffect hook...
    useEffect(() => {
        setConfettiWidth(confettiRef.current.clientWidth)
        setConfettiHeight(confettiRef.current.clientHeight)
    }, [])

    // handleConfetti function to handle on mouse Enter and leave reaction...
    const handleConfetti = (toggle) => {
        setStartConfetti(toggle)
    }
    // ########################################################

    // get shopping added products from cart redux toolkit...
    const cart = useSelector((state)=> state.cart)
    const shippingFees = 4.99;
    const shippingDiscount = 0.99
    return (
        <Container ref={confettiRef}>
            <NavBar />
            <Offers />
            <Wrapper>
                <Title>Your Shopping Cart</Title>
                <TopContaier>
                    <TopConatinerButton>CONTINUE SHOPPING</TopConatinerButton>
                    <TopContainerDetails>
                        <TopContainerText>Shopping cart (3)</TopContainerText>
                        <TopContainerText>Wishlist (0)</TopContainerText>
                    </TopContainerDetails>
                    <TopConatinerButton type='bgfilled'>CHECKOUT</TopConatinerButton>
                </TopContaier>
                <BottomContainer>
                    <ProductInfo>
                        {cart?.products?.map((product)=>(<><Product>
                            <ProductWrapper>
                                <ProductImage src={product.image} />
                                <ProductDetails>
                                    <ProductName><b>Name:</b>{product.title}</ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductColor color={product.selectedColor} />
                                    <ProductSize><b>Size:</b>{product.selectedSize}</ProductSize>
                                </ProductDetails>

                            </ProductWrapper>
                            <PriceDetails>
                                <ProductQuantityContainer>
                                    <RemoveCircleOutlineIcon />
                                    <Quantity>{product.orderedQuantity}</Quantity>
                                    <AddCircleOutlineIcon />
                                </ProductQuantityContainer>
                                <ProductPrice>{product.orderedQuantity*product.price}</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <HorizontalLine/>
                        </>))}
                    </ProductInfo>
                    <ProductSummary>
                        <SummaryTitle>CheckOut Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Estimated fees</SummaryItemText>
                            <SummaryItemPrice>$ {shippingFees}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -{shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='net'>
                            <SummaryItemText>Balance</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total + shippingFees - shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        <CheckOutButton  onMouseEnter={() => handleConfetti(true)} onMouseLeave={() => handleConfetti(false)}>CHECKOUT</CheckOutButton>
                    </ProductSummary>
                </BottomContainer>
                <Confetti
                width={confettiWidth}
                height={confettiHeight}
                recycle={startConfetti}
                numberOfPieces={100}
            />
            </Wrapper>
            <Footer />
        </Container>
    )
}
