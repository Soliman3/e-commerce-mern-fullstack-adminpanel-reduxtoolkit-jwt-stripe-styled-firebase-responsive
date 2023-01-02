import React from 'react';
import styled from 'styled-components';
import Mobile from '../images/mobiles.jpg'

// Styling...
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: skyblue;
    width: 100%;
    height: auto;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
`
const TopContainerTitle = styled.div`
    font-weight: 900;
    font-size: 40px;
`
const TopContainerButton = styled.button`
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 35px;
    font-weight: bold;
`
const BottomContainer = styled.div`
    display: flex;
    margin:0px 20px;
    border: none;
    justify-content: space-between;
`
const BottomContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 12%;
    height: 300px;
    border: 5px solid white;
    margin:10px;
    background-color: white;
    margin-bottom: 20px;
    
    
`
const BottomItemImageContainer = styled.div`
    flex: 4;
    position: relative;
    border: none;
`
const BottomItemImage = styled.img`
    width: 100%;
    height: 100%;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    border: none;
`
const BottomItemTextContainer = styled.div`
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
`
const BottomItemText = styled.span`
    font-weight: 900;
    font-size: 20px;
`
const BottomItemTextSale = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #d11636;
`


export default function CategoryHotProduct() {
    return (
        <Container>
            <Wrapper>
                <TopContainer>
                    <TopContainerTitle>ELECTRONICS</TopContainerTitle>
                    <TopContainerButton>Shop Now</TopContainerButton>
                </TopContainer>
                <BottomContainer>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                    <BottomContainerItem>
                        <BottomItemImageContainer>
                            <BottomItemImage src={Mobile} />
                        </BottomItemImageContainer>
                        <BottomItemTextContainer>
                            <BottomItemText>MOBILES</BottomItemText>
                            <BottomItemTextSale>UP TO 50% OFF</BottomItemTextSale>
                        </BottomItemTextContainer>
                    </BottomContainerItem>
                </BottomContainer>
            </Wrapper>
        </Container>
    )
}
