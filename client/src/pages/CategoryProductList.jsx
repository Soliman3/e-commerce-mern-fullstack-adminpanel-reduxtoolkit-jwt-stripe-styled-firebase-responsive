import React, { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// import styled component library for styling...
import styled from 'styled-components'

// import other react components...
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Offers from '../components/Offers'
import Products from '../components/Products'
import { mobile } from '../responsive'



// Styling...
const Container = styled.div`
    
`
const CategoryTitle = styled.h1`
    margin: 25px 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`
const Filter = styled.div`
    margin: 25px 40px;
    display: flex;
    align-items: center;
    ${mobile({margin: '10px 40px'})}
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
const ButtonReset = styled.button`
    background-color: aqua;
    color: black;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    margin-left: 40px;
    font-size: 10px;
    &:hover{
        background-color: yellow;
        font-size: 14px;
    }
`
export default function CategoryProductList({ type }) {
    // useLayoutEffect to scroll to the top of the page when navigate to it...
    useLayoutEffect(() => {
        window.scrollTo(0,0)
    })

    // get location...
    const location = useLocation()
    const category = location.pathname.split('/')[2]
    
    // get filter input values...
    const [filter, setFilter] = useState({})
    const handleFilter = (e) => {
        const value = e.target.value
        setFilter({...filter, [e.target.name]: value})
    }
    
    // get sort input value...
    const [sort, setSort] = useState('Newest')

    return (
        <Container>
            <NavBar />
            <Offers />
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <FilterContainer>
                <Filter>
                    <FilterText>product filter</FilterText>
                        <FilterSelect name='color' onChange={handleFilter}>
                        <FilterOption disabled >Color</FilterOption>
                        <FilterOption>gray</FilterOption>
                        <FilterOption>silver</FilterOption>
                        <FilterOption>gold</FilterOption>
                        <FilterOption>black</FilterOption>
                     </FilterSelect>
                     
                        {category==='mobile' && (
                            <>
                        <FilterSelect name='size' onChange={handleFilter}>
                        <FilterOption disabled >Size</FilterOption>
                            <FilterOption>1.65 inch</FilterOption>
                            <FilterOption>1.80 inch</FilterOption>
                            <FilterOption>2.40 inch</FilterOption>
                            <FilterOption>2.44 inch</FilterOption>
                            <FilterOption>2.79 inch</FilterOption>
                            <FilterOption>2.80 inch</FilterOption>
                        </FilterSelect>
                        </>
                        )}
                        {category==='appliances' && (
                            <>
                         <FilterSelect name='size' onChange={handleFilter}>
                         <FilterOption disabled >Size</FilterOption>
                            <FilterOption>small</FilterOption>
                            <FilterOption>large</FilterOption>
                            <FilterOption>medium</FilterOption>
                        </FilterSelect>
                        </>
                        )}
                        {category==='accessories' && (
                            <>
                        </>
                        )}
                        
                        <ButtonReset onClick={(e)=>setFilter({})}>Reset Filters</ButtonReset>
                </Filter>
                <Filter>
                    <FilterText>sort</FilterText>
                        <FilterSelect onChange={(e)=> setSort(e.target.value)}>
                        <FilterOption value="Newest">Newest</FilterOption>
                        <FilterOption value="asc">asc</FilterOption>
                        <FilterOption value="desc">desc</FilterOption>
                     </FilterSelect>
                </Filter>
            </FilterContainer>
            <Products type='filter' category={category} filter={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}
