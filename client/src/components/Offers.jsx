import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: skyblue;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
`
export default function Offers() {
  return (
    <Container>
      Flash Deals , 50% percent off in all product till midnight.
    </Container>
  )
}
