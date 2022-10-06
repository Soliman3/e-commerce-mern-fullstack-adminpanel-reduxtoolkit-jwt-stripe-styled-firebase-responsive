import React from 'react'
import { Link } from 'react-router-dom'

// import styled component library for styling...
import styled from 'styled-components'

// for responsive design NavBar...
import { mobile } from '../responsive'

// Styling...
const Container = styled.div`
    flex: 1;
    width: 25%;
    height: 25%;
    ${mobile({ height: '100%', width: '100%' })};
    align-items: center;
`
const CategoryImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    margin-bottom: 10px;
`
const CategoryInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const CategoryTitle = styled.h1`
   font-size: 20px;
   font-weight: bold;
       
`
const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

// Category Item react functional component...
export default function CategoryItem({ section }) {
    return (
        <Container>
            <Link to={`/products/${section.category}`} style={{ color: 'inherit', backgroundColor: 'inherit', textDecoration: 'none' }} >
                <CategoryContainer>

                    <CategoryImage src={section.img} />
                    <CategoryInfo>
                        <CategoryTitle>{section.title}</CategoryTitle>
                    </CategoryInfo>
                </CategoryContainer>
            </Link>
        </Container>
    )
}
