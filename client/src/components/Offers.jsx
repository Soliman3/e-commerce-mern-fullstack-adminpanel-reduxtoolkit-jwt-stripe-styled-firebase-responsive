import React from 'react'
import styled from "styled-components"
import Confetti from 'react-confetti'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    position: sticky;
    z-index:3;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: aqua;
    height: 40px;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
`
const OfferMessage = styled.span`
    font-size: 14px;

    &:hover{
      transition: all 1s ease;
      transform: scale(1.2);
      ${mobile({transform: 'none', fontWeight: 'bold'})};
    }
`
export default function Offers() {
  // handling confetti hooks...
  const confettiRef = useRef(null) // to determine the ref location of confetti...
  const [startConfetti, setStartConfetti] = useState(false) // to toggle start and close confetti show...
  const [confettiWidth, setConfettiWidth] = useState(null) // to get the width of the displayed div...
  const [confettiHeight, setConfettiHeight] = useState(null) // to get the height of displayed div...

  // getting current height and width by useEffect hook...
  useEffect(() => {
    setConfettiWidth(confettiRef.current.clientWidth)
    setConfettiHeight(confettiRef.current.clientHeight)
  }, [])

  // handleConfetti function to handle on mouse Enter and leave reaction...
  const handleConfetti = (toggle) => {
    setStartConfetti(toggle)
  }
  return (
    <Container ref={confettiRef} onMouseEnter={() => handleConfetti(true)} onMouseLeave={() => handleConfetti(false)} >
      <OfferMessage>
        Flash Deals , 50% percent off in all product till midnight.
      </OfferMessage>
      <Confetti
        width={confettiWidth}
        height={confettiHeight}
        recycle={startConfetti}
        numberOfPieces={100}
      />
    </Container>
  )
}
