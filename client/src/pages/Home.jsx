import React, { useEffect } from 'react'

// import styled component library for styling...
import styled from 'styled-components'


// import other react component...
import NavBar from '../components/NavBar'
import Offers from '../components/Offers'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import CategoryBar from '../components/CategoryBar'
import CategoryHotProduct from '../components/CategoryHotProduct'



// styling...
const Container = styled.div`
    
`

// Home react function component for home page...
export default function Home({ type }) {
    return (
        <Container>
            <Offers />
            <NavBar />
            <CategoryBar/>
            <Slider />
            <Categories />
            <CategoryHotProduct/>
            <Products />
            <Newsletter />
            <Footer/>
        </Container>
    )
}
