import React from 'react';
import styled from 'styled-components';

// import icons from muiv5 library...
import {ArrowDropDown} from '@mui/icons-material';

// Styling...
const Container = styled.div`
    height: 50px;
    border-top: 0.25px solid #bee4f4;
    border-bottom: 0.25px solid #bee4f4;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    
`
const LeftContainer = styled.div`
    flex: 1;
    align-items: center;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border-right: 0.25px solid #bee4f4;
`
const LeftContainerLabel = styled.span`
    font-size: 16px;
    font-weight: bold;
`
const LeftContainerIcon = styled.div`
    
`
const RightContainer = styled.div`
    flex: 4;
    align-items: center;
    padding: 15px;
    display: flex;
`
const RightContainerItem = styled.span`
    font-size: 16px;
    margin-right: 25px;
    font-weight: bold;
    color: ${(props)=> props.type === 'vip' && 'red'};
`


export default function CategoryBar() {
  return (
    <Container>
          <Wrapper>
              <LeftContainer>
                  <LeftContainerLabel>All Category</LeftContainerLabel>
                  <LeftContainerIcon><ArrowDropDown style={{color: 'blue'}}/></LeftContainerIcon>
              </LeftContainer>
              <RightContainer>
                 <RightContainerItem>Electronics</RightContainerItem>
                 <RightContainerItem>Mobiles</RightContainerItem>
                 <RightContainerItem>Men</RightContainerItem>
                 <RightContainerItem>Women</RightContainerItem>
                 <RightContainerItem>Home</RightContainerItem>
                 <RightContainerItem>Beauty</RightContainerItem>
                 <RightContainerItem>Babay & Toys</RightContainerItem>
                 <RightContainerItem>Electronics</RightContainerItem>
                 <RightContainerItem>Supermarket</RightContainerItem>
                 <RightContainerItem type="vip">DEALS</RightContainerItem>
                 
              </RightContainer>
      </Wrapper>
    </Container>
  )
}
