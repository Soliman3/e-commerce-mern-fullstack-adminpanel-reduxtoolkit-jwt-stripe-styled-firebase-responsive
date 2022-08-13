import React from 'react'
import styled from 'styled-components'


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
    ${mobile({width: "100%"})}
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
    padding: 15px;
    font-weight: 700;
    background-color: white;
    ${mobile({backgroundColor: "yellow", border: 'none'})}

    &:hover{
        transform: scale(1.2);
        transition: all 1s ease;
        border: 2px solid aqua;
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
  return (
    <Container>
          <NavBar />
          <Offers />
          <SingleProductWrapper>
              <ProductImageContainer>
                  <ProductImage src={ItemImage}/>
              </ProductImageContainer>
              <ProductInfoContainer>
                  <ProductTitle>Iphone 13mini</ProductTitle>
                  <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nemo non rerum qui sunt quae fugit enim quaerat provident illo omnis illum eos dolores, quis recusandae voluptatum temporibus ratione beatae. Distinctio nobis, nemo sint molestias nam odit eius quibusdam nisi?</ProductDescription>
                  <ProductPrice>$ 729.00</ProductPrice>  
                  <FilterContainer>
                  <Filter>
                      <FilterTitle>Color</FilterTitle>
                      <FilterColor color='Gold'/>
                      <FilterColor color='Gray'/>
                      <FilterColor color='Silver'/>
                  </Filter>
                  <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                            <FilterSizeOption>1.65 inch</FilterSizeOption>
                            <FilterSizeOption>1.80 inch</FilterSizeOption>
                            <FilterSizeOption>2.40 inch</FilterSizeOption>
                            <FilterSizeOption>2.44 inch</FilterSizeOption>
                            <FilterSizeOption>2.79 inch</FilterSizeOption>
                            <FilterSizeOption>2.80 inch</FilterSizeOption>
                          </FilterSize>
                  </Filter>
                  </FilterContainer>
                  <AddToCartContainer>
                      <QuantityContainer>
                          <RemoveCircleOutlineIcon />
                            <Quantity>1</Quantity>
                          <AddCircleOutlineIcon />
                      </QuantityContainer>
                      <AddToCartButton>ADD TO CART</AddToCartButton>
                  </AddToCartContainer>
              </ProductInfoContainer>
          </SingleProductWrapper>
          <Newsletter />
          <Footer />
    </Container>
  )
}
