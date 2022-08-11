import React, { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
// import styled component library for styling...
import styled from 'styled-components'

// import icons from mui5 library...
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// import required images...
import ImageForSlider from '../images/2.png'

// import Slider data...
import { SliderItems } from '../Data/sliderData'




// Styling...
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color:white;
    overflow: hidden;
    position: relative;
    
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
    height: 100vh;
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
    height: 88%;
`
const SliderInfoContainer = styled.div`
    flex: 1;
    padding: 45px;
`
const SlideTitle = styled.h1`
    font-size: 80px;
`
const SlideDescription = styled.p`
    margin: 50px 0;
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: 500;
`
const SlideButton = styled.button`
    font-size: 20px;
    background-color: transparent;
    cursor: pointer ;
    padding: 15px;
    
    animation: ${props=> props.myElementIsVisible ===true && 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'};
    transform: ${props=> props.myElementIsVisible === true && 'translate3d(0, 0, 0)'};
    backface-visibility: ${props=> props.myElementIsVisible === true && 'hidden'};
    perspective: ${props=> props.myElementIsVisible === true && '1000px'};

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }
        40% , 60% {
            transform: translate3d(4px, 0, 0);
        }
        }
`
export default function Slider() {

    // intersection observer for animation...
    const { ref: myRef, inView: myElementIsVisible} = useInView()
    console.log("shake", myElementIsVisible)

    // react hooks for react slider...
    const [slideIndex, setSlideIndex] = useState(0)

    const handleSlider = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <SliderArrow direction="left" onClick={() => handleSlider('left')} >
                <ArrowBackIosOutlinedIcon />
            </SliderArrow>
            <SliderWrapper slideIndex={slideIndex} ref={myRef} myElementIsVisible={myElementIsVisible}>
                {SliderItems.map((slide) => (
                    <Slide bg={slide.bg} key={slide.id} >
                        <SliderImageContainer>
                            <SliderImage src={slide.img} />
                        </SliderImageContainer>
                        <SliderInfoContainer>
                            <SlideTitle>{slide.title}</SlideTitle>
                            <SlideDescription>{slide.description}</SlideDescription>
                            <SlideButton ref={myRef} myElementIsVisible={myElementIsVisible}>SHOP NOW</SlideButton>
                        </SliderInfoContainer>
                    </Slide>))}


            </SliderWrapper>
            <SliderArrow direction="right" onClick={() => handleSlider('right')} >
                <ArrowForwardIosOutlinedIcon />
            </SliderArrow>

        </Container>
    )
}