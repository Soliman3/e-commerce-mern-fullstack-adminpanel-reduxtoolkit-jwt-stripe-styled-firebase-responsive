import React from 'react'
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components'

// import icons from mui5 library...
import SendIcon from '@mui/icons-material/Send';

// for responsive design NavBar...
import { mobile } from '../responsive'

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
    ${mobile({ margin: '15px 15px', fontSize: '50px'})}
    -webkit-animation: ${props=> props.isVisible ===true && 'fadeInLeft 1.2s both'};
    -moz-animation: ${props=> props.isVisible ===true && 'fadeILeftp 1.2s both'};
    -o-animation: ${props=> props.isVisible ===true && 'fadeILeftp 1.2s both'};
    animation: ${props=> props.isVisible ===true && 'fadeILeftp 1.2s both'};
    @-webkit-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -webkit-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateX(0px);
        }
    }
    @-moz-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -moz-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateX(0px);
        }
    }
    @-o-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -o-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -o-transform: translateX(0px);
        }
    }
    @keyframes fadeILeftp {
        0%{
            opacity: 0;
            transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`
const Description = styled.div`
    font-weight: 400;
    font-size: 26px;
    margin-bottom: 20px;
    ${mobile({margin:'10px 25px', fontSize:'20'})};

    -webkit-animation: ${props=> props.isVisible ===true && 'fadeInLeft 2.5s both'};
    -moz-animation: ${props=> props.isVisible ===true && 'fadeILeftp 2.5s both'};
    -o-animation: ${props=> props.isVisible ===true && 'fadeILeftp 2.5s both'};
    animation: ${props=> props.isVisible ===true && 'fadeILeftp 2.5s both'};
    @-webkit-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -webkit-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateX(0px);
        }
    }
    @-moz-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -moz-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateX(0px);
        }
    }
    @-o-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -o-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -o-transform: translateX(0px);
        }
    }
    @keyframes fadeILeftp {
        0%{
            opacity: 0;
            transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`
const InputContainer = styled.div`
    width: 50%;
    height: 55px;
    gap:6px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: '80%', marginTop: '25px'})}
    -webkit-animation: ${props=> props.isVisible ===true && 'fadeInLeft 3.5s both'};
    -moz-animation: ${props=> props.isVisible ===true && 'fadeILeftp 3.5s both'};
    -o-animation: ${props=> props.isVisible ===true && 'fadeILeftp 3.5s both'};
    animation: ${props => props.isVisible === true && 'fadeILeftp 3.5s both'};
    ${mobile({
        webkitAnimation: 'none',
        mozAnimation: 'none',
        oAnimation: 'none',
        animation: 'none'
    })}
    @-webkit-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -webkit-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateX(0px);
        }
    }
    @-moz-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -moz-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateX(0px);
        }
    }
    @-o-keyframes fadeILeftp {
        0%{
            opacity: 0;
            -o-transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            -o-transform: translateX(0px);
        }
    }
    @keyframes fadeILeftp {
        0%{
            opacity: 0;
            transform: translateX(-400px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }
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
    ${mobile({ flex: '3.5'})}
`
// NewsLetter react functional component...
export default function Newsletter() {
    // intersection observer to render the animation when scroll to it...
    const { ref:referance, inView: isVisible } = useInView()
  return (
    <Container>
          <Title ref={referance} isVisible={isVisible}>OFFERS SUBSCRIPTION</Title>
          <Description ref={referance} isVisible={isVisible}>Get instance emails for the latest offers</Description>
          <InputContainer ref={referance} isVisible={isVisible}>
              <Input placeholder='Enter Your Email'/>
              <Button>
                  <SendIcon/>
              </Button>
          </InputContainer>
    </Container>
  )
}
