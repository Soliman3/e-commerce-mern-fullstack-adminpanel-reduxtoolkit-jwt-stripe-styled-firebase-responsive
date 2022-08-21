import React from 'react'
import Figures from '../components/Figures'
import styled from 'styled-components'


// Styling...
const Container = styled.div`
    flex: 4;
    
`
export default function Home() {
  return (
    <Container>
     <Figures/>
    </Container>
  )
}
