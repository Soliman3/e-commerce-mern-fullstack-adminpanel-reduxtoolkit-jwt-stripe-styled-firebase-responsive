import React from 'react'
import styled from 'styled-components'

// import icons from mui5 library...
import {
    ArrowUpward,
    ArrowDownward
} from '@mui/icons-material'

// Styled...
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const FigureItem = styled.div`
    flex: 1;
    cursor: pointer;
    padding: 25px;
    margin: 25px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &:hover{
        background-color: yellow;
        transform: scale(1.1);
        transition: all 0.25s ease;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    }
`
const FigureTitle = styled.span`
    font-size: 21px;
`
const FigureAmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
const FigureAmout = styled.span`
    font-size: 30px;
    font-weight: 700;
`
const FigureAmountChange = styled.span`
    display: flex;
    align-items: center;
    margin-left: 5px;
`
const FigureCompare = styled.span`
    font-size: 12px;
`

// Figures React Functional Component...
export default function Figures() {
  return (
    <Container>
          <FigureItem>
              <FigureTitle>Gross Margin</FigureTitle>
              <FigureAmountContainer>
                  <FigureAmout>$675,402</FigureAmout>
                  <FigureAmountChange>
                      -10.4
                      <ArrowDownward style={{color: 'red'}}/>
                  </FigureAmountChange>
              </FigureAmountContainer>
              <FigureCompare>Compare to last month</FigureCompare>
          </FigureItem> 
          <FigureItem>
              <FigureTitle>Revenues</FigureTitle>
              <FigureAmountContainer>
                  <FigureAmout>$1,675,000</FigureAmout>
                  <FigureAmountChange>
                      -8.6
                      <ArrowDownward style={{color: 'red'}}/>
                  </FigureAmountChange>
              </FigureAmountContainer>
              <FigureCompare>Compare to last month</FigureCompare>
          </FigureItem>
          <FigureItem>
              <FigureTitle>Total Expenses</FigureTitle>
              <FigureAmountContainer>
                  <FigureAmout>$1,000,402</FigureAmout>
                  <FigureAmountChange>
                      +13.02
                      <ArrowUpward style={{color: 'green'}}/>
                  </FigureAmountChange>
              </FigureAmountContainer>
              <FigureCompare>Compare to last month</FigureCompare>
          </FigureItem> 
    </Container>
  )
}
