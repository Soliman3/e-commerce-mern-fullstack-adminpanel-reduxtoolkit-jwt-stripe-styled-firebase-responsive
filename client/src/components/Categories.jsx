import React from 'react'
import { useInView } from 'react-intersection-observer'

// import required react components...
import CategoryItem from './CategoryItem'

// import styled component library for styling...
import styled from 'styled-components'

// import Categories data...
import { categories } from '../Data/categoriesData'

// for responsive design NavBar...
import { mobile } from '../responsive'

// Styling...
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})};
    justify-content: space-between;
    padding: 30px;
    ${mobile({ paddingBottom: '60px', backgroundColor: 'yellow' })}

    -webkit-animation: ${props=> props.myElementIsVisible ===true && 'fadeInLeftp 1.2s both'};
    -moz-animation: ${props=> props.myElementIsVisible ===true && 'fadeILeftp 1.2s both'};
    -o-animation: ${props=> props.myElementIsVisible ===true && 'fadeILeftp 1.2s both'};
    animation: ${props => props.myElementIsVisible === true && 'fadeILeftp 1.2s both'};
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
            ${mobile({mozTransform: "translateY(0px)"})}
        }
        100%{
            opacity: 1;
            -moz-transform: translateX(0px);
        }
    }
    @-o-keyframes fadeILeftp  {
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
    ${mobile({})}
`

// Categories react functional component...
export default function Categories() {
    const { ref: myRef, inView: myElementIsVisible } = useInView()
    
    return (
        <Container ref={myRef} myElementIsVisible={myElementIsVisible}>
            {categories.map(section => (<CategoryItem section={section} key={section.id} />))}
        </Container>
    )
}
