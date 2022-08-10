import React from 'react'

// import styled component library for styling...
import styled from 'styled-components'

// import icons from mui5 library...
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Styling...
const ProductInfo = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    z-index: 3;
    background-color: rgba(0,0,0,0.18);
    transition: all 0.5s ease;
    opacity: 0;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3fbf8;
    position: relative;

    &:hover ${ProductInfo}{
        opacity:1;
    }
    &:hover {
        transition: all 0.5s ease;
        transform: scale(1.04);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`
const ProductImage = styled.img`
    height: 75%;
    z-index: 2;
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
`
const ActionIcons = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.2);
        background-color:#f3fbf8;
    }
`

export default function Product({ item }) {
    
    return (
        <Container>
            <Circle />
            <ProductImage src={item.img} />
            <ProductInfo>
                <ActionIcons>
                    <AddShoppingCartOutlinedIcon />
                </ActionIcons>
                <ActionIcons>
                    <SearchOutlinedIcon />
                </ActionIcons>
                <ActionIcons>
                    <FavoriteBorderOutlinedIcon />
                </ActionIcons>
            </ProductInfo>
        </Container>
    )
}
