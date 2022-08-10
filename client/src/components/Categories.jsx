import React from 'react'

// import required react components...
import CategoryItem from './CategoryItem'

// import styled component library for styling...
import styled from 'styled-components'

// import Categories data...
import { categories } from '../Data/categoriesData'

// Styling...
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;

`

// Categories react functional component...
export default function Categories() {
    return (
        <Container>
            {categories.map(section => (<CategoryItem section={section} key={section.id} />))}
        </Container>
    )
}
