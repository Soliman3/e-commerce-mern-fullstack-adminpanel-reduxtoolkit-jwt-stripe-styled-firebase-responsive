import React from 'react'

// import styled component library for styling...
import styled from 'styled-components'

// import other react component...
import NavBar from '../components/NavBar'


// styling...
const Container = styled.div`
    
`

// Home react function component for home page...
export default function Home() {
  return (
    <Container>
      <NavBar/>
    </Container>
  )
}
