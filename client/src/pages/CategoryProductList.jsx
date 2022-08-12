import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Offers from '../components/Offers'
import Products from '../components/Products'

const Container = styled.div`
    
`
const CategoryTitle = styled.h1`
    margin: 25px 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 25px 40px;
    display: flex;
    align-items: center;


    
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
`
const FilterSelect = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const FilterOption = styled.option`
    font-size: 17px;
`
export default function CategoryProductList() {
    return (
        <Container>
            <NavBar />
            <Offers />
            <CategoryTitle>Mobile Phones</CategoryTitle>
            <FilterContainer>
                <Filter>
                    <FilterText>product filter</FilterText>
                        <FilterSelect>
                        <FilterOption disabled selected>Color</FilterOption>
                        <FilterOption>Gray</FilterOption>
                        <FilterOption>Silver</FilterOption>
                        <FilterOption>Golden</FilterOption>
                        <FilterOption>Black</FilterOption>
                     </FilterSelect>
                     <FilterSelect>
                        <FilterOption disabled selected>Size</FilterOption>
                        <FilterOption>1.65 inch</FilterOption>
                        <FilterOption>1.80 inch</FilterOption>
                        <FilterOption>2.40 inch</FilterOption>
                        <FilterOption>2.44 inch</FilterOption>
                        <FilterOption>2.79 inch</FilterOption>
                        <FilterOption>2.80 inch</FilterOption>
                     </FilterSelect>
                    
                </Filter>
                <Filter>
                    <FilterText>sort</FilterText>
                        <FilterSelect>
                        <FilterOption  selected>Newest</FilterOption>
                        <FilterOption>Price (asc)</FilterOption>
                        <FilterOption>Price (desc)</FilterOption>
                     </FilterSelect>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}
