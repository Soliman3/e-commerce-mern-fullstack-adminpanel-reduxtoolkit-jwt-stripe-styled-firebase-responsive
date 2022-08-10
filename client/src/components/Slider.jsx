import React, { useState } from 'react'
// import styled component library for styling...
import styled from 'styled-components'

// import icons from mui5 library...
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

// import required images...
import ImageForSlider from '../images/2.png'

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
    left: ${props=> props.direction=== 'left' && '15px'};
    right: ${props=> props.direction=== 'right' && '15px'};
    margin: auto;
    z-index: 2;

`
const SliderWrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`
const Slide = styled.div`
    display:flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=> props.bg};
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
`
export default function Slider() {

    const [ slideIndex, setSlideIndex ] = useState(0)

    const handleSlider = (direction) => {
        
    }
  return (
    <Container>
          <SliderArrow direction="left" onClick={()=>handleSlider('left')}>
              <ArrowBackIosOutlinedIcon/>
          </SliderArrow>
          <SliderWrapper>
              <Slide bg="yellow">
                  <SliderImageContainer>
                      <SliderImage src={ImageForSlider} />
                  </SliderImageContainer>
                  <SliderInfoContainer>
                      <SlideTitle>SPRING SALES</SlideTitle>
                      <SlideDescription>DON'T MISS THIS HUGE SALE THIS SEASON</SlideDescription>
                      <SlideButton>SHOP NOW</SlideButton>
                  </SliderInfoContainer>
              </Slide>
              <Slide bg="red">
                  <SliderImageContainer>
                      <SliderImage src={ImageForSlider} />
                  </SliderImageContainer>
                  <SliderInfoContainer>
                      <SlideTitle>ACCESSORIES SALES</SlideTitle>
                      <SlideDescription>DON'T MISS THIS HUGE SALE THIS SEASON</SlideDescription>
                      <SlideButton>SHOP NOW</SlideButton>
                  </SliderInfoContainer>
              </Slide>
              <Slide bg="green">
                  <SliderImageContainer>
                      <SliderImage src={ImageForSlider} />
                  </SliderImageContainer>
                  <SliderInfoContainer>
                      <SlideTitle>APPLIANCE SALES</SlideTitle>
                      <SlideDescription>DON'T MISS THIS HUGE SALE THIS SEASON</SlideDescription>
                      <SlideButton>SHOP NOW</SlideButton>
                  </SliderInfoContainer>
              </Slide>
          </SliderWrapper>
          <SliderArrow direction="right" onClick={()=>handleSlider('right')} >
              <ArrowForwardIosOutlinedIcon/>
          </SliderArrow>
          
    </Container>
  )
}
