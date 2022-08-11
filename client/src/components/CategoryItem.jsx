import React from 'react'

// import styled component library for styling...
import styled from 'styled-components'

// Styling...
const CategoryTitle = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 10px;
    border: 1px solid black;
    cursor: pointer;
    background-color: transparent;
    color: white;
    font-weight: 700;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.2);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transform: rotate(0deg);
        border-color: white;
    }
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
    width: 25%;
    height: 25%;
    
    &:hover ${CategoryTitle} {
        transform: scale(1.5);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        background-color: rgba(0,0,0,0.18);
        transition: all 1s ease;
        
    }
    &:hover {
        transform: scale(1.2);
        transition: all 1s ease;
        
    }
    &:hover ${Button}{
        margin-top: 60px;
    }
    
    

`
const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    

`
const CategoryInfo = styled.div`
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

// Category Item react functional component...
export default function CategoryItem({ section }) {
    return (
        <Container>
            <CategoryImage src={section.img} />
            <CategoryInfo>
                <CategoryTitle>{section.title}</CategoryTitle>
                <Button>SHOP NOW</Button>
            </CategoryInfo>
        </Container>
    )
}
