import React from 'react'
import styled from 'styled-components'

// import required other react components...
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Offers from '../components/Offers'

// import 404page not found image from images folder...
import page404 from '../images/page404.png'

// Styling...
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const Page404Container = styled.div`
  flex: 4;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-direction: column;
  margin-bottom: 35px;
`
const Page404Image = styled.img`
  width: 37%;
  
`

// Page 404 React Functional Component...
export default function Page404() {
    return (
        <Container>
            <Offers />
            <NavBar />
            <Page404Container>
                <Page404Image src={page404} alt='' />
                404 Page Not Fount
            </Page404Container>
            <Newsletter />
            <Footer />
        </Container>
    )
}
