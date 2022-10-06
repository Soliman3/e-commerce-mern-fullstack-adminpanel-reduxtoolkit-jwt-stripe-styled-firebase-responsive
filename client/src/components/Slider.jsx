import React, { useState, useRef, useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
// import styled component library for styling...
import styled from 'styled-components'

// import Confetti for celebration effects...
import Confetti from 'react-confetti'

// import icons from mui5 library...
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// import required images...
// import ImageForSlider from '../images/2.png'

// import Slider data...
import { SliderItems } from '../Data/sliderData'

// for responsive design NavBar...
import {mobile} from '../responsive'


// Styling...
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 350px;
    background-color:white;
    overflow: hidden;
    position: relative;
    ${mobile({display:'none'})}
    
`
const SliderArrow = styled.div`
    width: 60px;
    height: 60px;
    background-color: #efe7e7;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.50;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '15px'};
    right: ${props => props.direction === 'right' && '15px'};
    margin: auto;
    z-index: 2;
`
const SliderWrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    
`
const Slide = styled.div`
    display:flex;
    align-items: center;
    width: 100vw;
  
    background-color: ${props => props.bg};
    transition: all 1s ease;
    
    -webkit-animation: fadeInTop 1.2s both;
    -moz-animation: fadeInTop 1.2s both;
    -o-animation: fadeInTop 1.2s both;
    animation: fadeInTop 1.2s both;
    @-webkit-keyframes fadeInTop {
        0%{
            opacity: 0;
            -webkit-transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateY(0px);
        }
    }
    @-moz-keyframes fadeInTop {
        0%{
            opacity: 0;
            -moz-transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateY(0px);
        }
    }
    @-o-keyframes fadeInTop {
        0%{
            opacity: 0;
            -o-transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            -o-transform: translateY(0px);
        }
    }
    @keyframes fadeInTop {
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    
`
const SliderImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
const SliderImage = styled.img`
    height: 100%;
    margin-left: 80px;
    margin-bottom: 25px;
`
const SliderInfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`
const SlideTitle = styled.h1`
    font-size: 65px;
`
const SlideDescription = styled.p`
    margin: 10px 0;
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 500;
`
const SlideButton = styled.button`
    font-size: 20px;
    background-color: transparent;
    cursor: pointer ;
    padding: 15px;
    width: 15%;
    
`
export default function Slider() {
    // ########################################################
    // intersection observer for animation...
    const { ref: shakeRef, inView: myElementIsVisible } = useInView()

    // react hooks for react slider...
    const [slideIndex, setSlideIndex] = useState(0)

    const handleSlider = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    // ########################################################
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
        <Container ref={confettiRef} onMouseEnter={() => handleConfetti(true)} onMouseLeave={() => handleConfetti(false)}>
            <SliderArrow direction="left" onClick={() => handleSlider('left')} >
                <ArrowBackIosOutlinedIcon />
            </SliderArrow>
            <SliderWrapper slideIndex={slideIndex} ref={shakeRef} myElementIsVisible={myElementIsVisible} >
                {SliderItems.map((slide) => (
                    <Slide bg={slide.bg} key={slide.id} >
                        <SliderImageContainer>
                            <SliderImage src={slide.img} />
                        </SliderImageContainer>
                        <SliderInfoContainer>
                            <SlideTitle>{slide.title}</SlideTitle>
                            <SlideDescription>{slide.description}</SlideDescription>
                            <SlideButton ref={shakeRef} myElementIsVisible={myElementIsVisible}>SHOP NOW</SlideButton>
                        </SliderInfoContainer>
                    </Slide>))}


            </SliderWrapper>
            <SliderArrow direction="right" onClick={() => handleSlider('right')} >
                <ArrowForwardIosOutlinedIcon />
            </SliderArrow>
            <Confetti
                width={confettiWidth}
                height={confettiHeight}
                recycle={startConfetti}
                numberOfPieces={100}
            />
        </Container>
    )
}