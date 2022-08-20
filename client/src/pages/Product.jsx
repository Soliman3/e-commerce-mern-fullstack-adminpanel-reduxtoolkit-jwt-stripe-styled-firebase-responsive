import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { publicRequest } from '../requestAxiosMethod'

// import other component...
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Offers from '../components/Offers'

// import required images from images folder...
import ItemImage from '../images/2.png'

// import Icons from mui5 library...
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// responsive for single product page...
import { mobile } from '../responsive'

// useLocation hook to fetch current locaiton url...
import { useLocation } from 'react-router-dom'
import { addProductToCart, emtyProductCart, removeProductFromCart } from '../redux/cartSlice'

// Styling...
const Container = styled.div`
    
`
const SingleProductWrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection: 'column', padding: '25px'})}
`
const ProductImageContainer = styled.div`
    flex:1;
`
const ProductImage = styled.img`
    width: 95%;
`
const ProductInfoContainer = styled.div`
    flex:1;
    padding: 135px 50px;
    display: flex;
    flex-direction: column;
    ${mobile({padding: '20px 20px'})}
    
`
const ProductTitle = styled.h1`
    font-weight: 200;
    font-size: 50px;
`
const ProductDescription = styled.p`
    margin: 25px 0px;
`
const ProductPrice = styled.span`
    font-size: 40px;
    
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 40px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.h3`
    font-weight: 200;
    font-size: 23px;
`
const FilterColor = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin:0px 8px;
`
const FilterSize = styled.select`
    margin: 0px 8px;
    display: flex;
    align-items: center;
    padding: 8px;
`
const FilterSizeOption = styled.option`
    
`
const AddToCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    ${mobile({ width: "100%" })}
    gap: 5px;
`
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Quantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0px 8px;
    border: 2px solid black;
    border-radius: 10px;
    ${mobile({width:'30px', hieght: '30px'})}
`
const AddToCartButton = styled.button`
    cursor: pointer;
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px 15px ;
    font-weight: 700;
    background-color: white;
    ${mobile({backgroundColor: "yellow", border: 'none'})}

    &:hover{
        border: none;
        background-color: aqua;
        ${mobile({border:'none'})}
    }
    
    &:active{
        transform: scale(1);
        transition: all 1s ease;
        background-color: aqua;
        border-radius: 19px;
    }
`
const RemoveFromCartButton = styled.button`
    cursor: pointer;
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px 15px ;
    font-weight: 700;
    background-color: white;
    margin-left: 20px;
    ${mobile({ backgroundColor: "white", border: 'red' })}
    

    &:hover{
        
        border: none;
        background-color: red;
        color: white;
        ${mobile({border:'none'})}
    }
    
    &:active{
        transform: scale(1);
        transition: all 1s ease;
        background-color: aqua;
        border-radius: 19px;
    }
`
export default function Product() {
    // to get product id from the url...
    const location = useLocation()
    const productId = location.pathname.split("/")[2]

    // fetching product data by id from server by axios...
        const [product, setProduct] = useState({})
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`/products/find/${productId}`)
                    setProduct(response.data)
            } catch (error) {
            }
        }
        getProduct()
    }, [productId])
    // handling userId...
    const user = useSelector((state)=> state.user.currentUser)
    const [userId, setUserId] = useState()

    useEffect(() => {
       setUserId(user._id) 
    }, [user._id])
    console.log(userId);
    // handling quantity...
    const [orderedQuantity, setOrderedQuantity] = useState(1)
    const handleQuantity = (type) => {
        // decrease quantity but ignore negative numbers as logic...
        if (type === 'dec' && orderedQuantity>0) {
            setOrderedQuantity(orderedQuantity - 1)
            // increasing quantity with limit of only 5 units...
        } else if(type === 'inc' && orderedQuantity<5){
            setOrderedQuantity(orderedQuantity +1)
        }
    }
// handle color selection...
    const [selectedColor, setSelectedColor] = useState()
    const [selectedSize, setSelectedSize] = useState()
 
// handle Add to Cart...
    const dispatch = useDispatch()

    const handleAddCart = () => {
        dispatch(addProductToCart({ ...product, orderedQuantity, selectedColor, selectedSize, userId }))
        
    }

// handle remove from Cart...
    const handleRemoveCart = () => {
        dispatch( removeProductFromCart({...product, orderedQuantity, selectedColor, selectedSize}))    
    }

    return (
    <Container>
          <NavBar />
          <Offers />
          <SingleProductWrapper>
              <ProductImageContainer>
                  <ProductImage src={product.image}/>
              </ProductImageContainer>
              <ProductInfoContainer>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductPrice>$ {product.price}</ProductPrice>  
                  <FilterContainer>
                  <Filter>
                          <FilterTitle>Color</FilterTitle>
                          {product?.color?.map(c => (<FilterColor color={c} key={c} onClick={()=> setSelectedColor(c)}/>))}
                      
                  </Filter>
                  <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                          {product?.size?.map(s => (<FilterSizeOption size={s} key={s} onChange={(e)=> setSelectedSize(e.target.value)}>{s}</FilterSizeOption>))}
                          </FilterSize>
                  </Filter>
                  </FilterContainer>
                  <AddToCartContainer>
                      <QuantityContainer>
                          <RemoveCircleOutlineIcon onClick={()=> handleQuantity('dec')} />
                          <Quantity>{orderedQuantity}</Quantity>
                          <AddCircleOutlineIcon onClick={()=> handleQuantity('inc')} />
                      </QuantityContainer>
                        <AddToCartButton onClick={handleAddCart}>ADD TO CART</AddToCartButton>
                        <RemoveFromCartButton onClick={handleRemoveCart}>REMOVE FROM CART</RemoveFromCartButton>
                  </AddToCartContainer>
              </ProductInfoContainer>
          </SingleProductWrapper>
          <Newsletter />
          <Footer />
    </Container>
  )
}
