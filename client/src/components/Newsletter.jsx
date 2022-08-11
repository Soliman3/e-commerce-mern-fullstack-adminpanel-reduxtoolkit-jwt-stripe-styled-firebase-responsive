import React from 'react'

import styled from 'styled-components'

// import icons from mui5 library...
import SendIcon from '@mui/icons-material/Send';

// Styling...
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    height: 70vh;
`
const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 70px;
`
const Description = styled.div`
    font-weight: 400;
    font-size: 26px;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 55px;
    gap:6px;
    display: flex;
    justify-content: space-between;

`
const Input = styled.input`
    border: none;
    flex: 15;
    width:100%;
    border-radius: 8px;
    padding-left: 20px;
    outline: none;
    font-size: 19px;
`
const Button = styled.button`
    flex:1;
    border-radius:8px;
    border: 1px solid black;
    background-color: transparent;
    
`
// NewsLetter react functional component...
export default function Newsletter() {
  return (
    <Container>
          <Title>OFFERS SUBSCRIPTION</Title>
          <Description>Get instance emails about the latest offers</Description>
          <InputContainer>
              <Input placeholder='Enter Your Email'/>
              <Button>
                  <SendIcon/>
              </Button>
          </InputContainer>
    </Container>
  )
}
