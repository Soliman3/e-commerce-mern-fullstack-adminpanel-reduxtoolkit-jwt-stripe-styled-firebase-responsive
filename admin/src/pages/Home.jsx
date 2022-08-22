import React from 'react'
import styled from 'styled-components'

// import other needed react components...
import Figures from '../components/Figures'
import Charts from '../components/Charts'


// Styling...
const Container = styled.div`
    flex: 4;
    
`
export default function Home() {
    return (
        <Container>
            <Figures />
            <Charts />
        </Container>
    )
}
