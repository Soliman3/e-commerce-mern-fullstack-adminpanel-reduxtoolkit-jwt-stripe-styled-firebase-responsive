import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

// import other needed react components...
import Figures from '../components/Figures'
import Charts from '../components/Charts'

// import dummy data for user charts...
import { usersData } from '../Data/dummyData'
import SmallWidget from '../components/widgets/SmallWidget'
import LargeWidget from '../components/widgets/LargeWidget'
import { userRequest } from '../requestAxiosMethod'

// Styling...
const Container = styled.div`
    flex: 4;
    
`
const HomeWidgets = styled.div`
    padding: 20px;
    display: flex;
`
export default function Home() {
    // fetch User Monthly Figures and render in Chart...
    // ##################################
    const [userMonthlyFigures, setUserMonthlyFigures] = useState([])

    const months = useMemo(
        () => [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ], []
    );

    useEffect(() => {
        const getUserFigures = async () => {
            try {
                const response = await userRequest.get('users/status')
                response.data.map((item) => {
                    setUserMonthlyFigures(previous=>[...previous, {name:months[item._id-1], "Active": item.total}])
                })
            } catch (error) {
                
            }
        }
        getUserFigures()
    }, [months])
     // ##################################
    
    return (
        <Container>
            <Figures />
            <Charts data={userMonthlyFigures} title='Revenues Chart' firstLine='Active' secondLine='returns' />
            <HomeWidgets>
                <SmallWidget />
                <LargeWidget /> 
            </HomeWidgets>
        </Container>
    )
}
