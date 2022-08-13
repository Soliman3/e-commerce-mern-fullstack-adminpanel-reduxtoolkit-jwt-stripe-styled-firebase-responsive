import React from 'react'
import { useInView } from 'react-intersection-observer'

// import required react components...
import Product from './Product'

// import styled component library for styling...
import styled from 'styled-components'

// import Categories data...
import { products } from '../Data/productsData'

// for responsive design NavBar...
import { mobile } from '../responsive'

// Styling...
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductContainer = styled.div`
    
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:35px;
    margin: 0px 18px;

    -webkit-animation: ${props => props.myElementIsVisible === true && 'fadeInTop 2.2s both'};
    -moz-animation: ${props => props.myElementIsVisible === true && 'fadeInTop 2.2s both'};
    -o-animation: ${props => props.myElementIsVisible === true && 'fadeInTop 2.2s both'};
    animation: ${props => props.myElementIsVisible === true && 'fadeInTop 2.2s both'};
    @-webkit-keyframes fadeInTop {
        0%{
            opacity: 0;
            -webkit-transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateY(0px);
        }
    }
    @-moz-keyframes fadeInTop {
        0%{
            opacity: 0;
            -moz-transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateY(0px);
        }
    }
    @-o-keyframes fadeInTop {
        0%{
            opacity: 0;
            -o-transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            -o-transform: translateY(0px);
        }
    }
    @keyframes fadeInTop {
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    
`
const TitleContainer = styled.div`
    display: ${props=> props.type === 'filter'? 'none': 'flex'};
    align-items: center;
    justify-content: center;
    padding: 30px;
    
    ${mobile({marginTop: '30px'})}
`
const Title = styled.h1`
    font-size: 70px;
    border: 5px solid black;
    padding: 15px 35px;
    ${mobile({fontSize: '35px'})}
`
// Products react functional component...
export default function Products({type}) {
    const { ref: myRef, inView: myElementIsVisible } = useInView()

    // intersection observer for animation...
    /*const myRef = useRef()
    const [myElementIsVisible, setMyElementIsVisible] = useState()
    console.log('myElementIsVisible', myElementIsVisible)
  
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    },[])*/
    return (
        <Container>

            <TitleContainer type={type}>
                <Title>Most Popular</Title>
            </TitleContainer>
            <ProductContainer ref={myRef} myElementIsVisible={myElementIsVisible}>
                {products.map(item => (<Product item={item} key={item.id} />))}

            </ProductContainer>
        </Container>
    )
}
