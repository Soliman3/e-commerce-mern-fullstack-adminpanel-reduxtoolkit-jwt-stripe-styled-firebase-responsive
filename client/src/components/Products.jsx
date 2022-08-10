import React, { useEffect, useRef, useState } from 'react'

// import required react components...
import Product from './Product'

// import styled component library for styling...
import styled from 'styled-components'

// import Categories data...
import { products } from '../Data/productsData'

// Styling...
const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`
// Products react functional component...
export default function Products() {

    // intersection observer for animation...
    const myRef = useRef()
    const [myElementIsVisible, setMyElementIsVisible] = useState()
    console.log('myElementIsVisible', myElementIsVisible)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    },[])
  return (
    <Container ref={myRef}>
          {products.map(item => (<Product item={item} key={item.id} />))}
          <h1> {myElementIsVisible? 'visible': 'invisible'}</h1>
    </Container>
  )
}
