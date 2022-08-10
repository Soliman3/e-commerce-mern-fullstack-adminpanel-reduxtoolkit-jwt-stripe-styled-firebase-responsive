import React from 'react'

// import styled component library for styling...
import styled from 'styled-components'

// import other react component...
import NavBar from '../components/NavBar'
import Offers from '../components/Offers'
import Slider from '../components/Slider'


// styling...
const Container = styled.div`
    
`

// Home react function component for home page...
export default function Home() {
    return (
        <Container>
            <Offers />
            <NavBar />
            <Slider/>
        </Container>
    )
}
