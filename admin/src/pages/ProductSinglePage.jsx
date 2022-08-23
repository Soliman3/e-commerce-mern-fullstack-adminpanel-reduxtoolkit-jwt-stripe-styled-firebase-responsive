import React from 'react'

// import styled components for css styling...
import styled from 'styled-components'

// import React Router Dom Library for Routing..
import { Link } from 'react-router-dom'

// import required components...
import Charts from '../components/Charts'

// import produts data from dummyData.js file...
import { productsData } from '../Data/dummyData'

// Styling...
const Container = styled.div`
    flex: 4;
`
const ProductTitleContainer = styled.div`
    
`
const ProductTitle = styled.h1`

`
const ProductAddNew = styled.button`

`
const ProductTop = styled.div`

`
const ProductBottom = styled.div`
    
`
const ProductTopLeft = styled.div`
    
`
const ProductTopRight = styled.div`
    
`
const ProductInfoTop = styled.div`

`
const ProductInfoBottom = styled.div`

`
const ProductInfoImage = styled.img`
    
`
const ProductInfoName = styled.h1`
    
`
const ProductInfoBottomItem = styled.div`
    
`
const ProductInfoBottomKey = styled.span`

`
const ProductInfoBottomValue = styled.span`
    
`
// Product Single Page React Functional Component...
export default function ProductSinglePage() {
    return (
        <Container>
            <ProductTitleContainer>
                <ProductTitle>Item Page</ProductTitle>
                <Link to="/newproduct" style={{ color: 'inherit', backgroundColor: 'inherit', textDecoration: 'none' }}>
                    <ProductAddNew>New</ProductAddNew>
                </Link>
            </ProductTitleContainer>
            <ProductTop>
                <ProductTopLeft>
                    <Charts data={productsData} title="Product Movements" secondLine="Sales" firstLine="Returns" />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImage src="https://i.ibb.co/GsH4D2J/2.png" alt="" />
                        <ProductInfoName>Iphone 12mini</ProductInfoName>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>Serial Number</ProductInfoBottomKey>
                            <ProductInfoBottomValue>09562257110</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>Sales</ProductInfoBottomKey>
                            <ProductInfoBottomValue>12500</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>Active</ProductInfoBottomKey>
                            <ProductInfoBottomValue>Yes</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>In Stock</ProductInfoBottomKey>
                            <ProductInfoBottomValue>Yes</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom></ProductBottom>
        </Container>
    )
}
