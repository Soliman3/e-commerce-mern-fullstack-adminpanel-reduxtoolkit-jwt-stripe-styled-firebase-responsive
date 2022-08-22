import React from 'react'
import styled from 'styled-components'

// import other needed react components...
import Figures from '../components/Figures'
import Charts from '../components/Charts'

// import dummy data for user charts...
import { usersData } from '../Data/dummyData'
import SmallWidget from '../components/widgets/SmallWidget'
import LargeWidget from '../components/widgets/LargeWidget'

// Styling...
const Container = styled.div`
    flex: 4;
    
`
const HomeWidgets = styled.div`
    padding: 20px;
    display: flex;
`
export default function Home() {
    return (
        <Container>
            <Figures />
            <Charts data={usersData} title='Revenues Chart' firstLine='Active' secondLine='returns' />
            <HomeWidgets>
                <SmallWidget />
                <LargeWidget />
                
            </HomeWidgets>
        </Container>
    )
}
