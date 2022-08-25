import React from 'react'
import styled from 'styled-components'

// import 404page not found image from images folder...
import page404 from '../images/page404.png'

// Styling...
const Container = styled.div`
  flex: 4;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-direction: column;
`
const Page404Image = styled.img`
  width: 25%;
  
`
  
// Page 404 React Functional Component...
export default function Page404() {
  return (
    <Container>
      <Page404Image src={page404} alt=''/>
      404 Page Not Fount 
    </Container>
  )
}
