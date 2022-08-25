import React from 'react'
import styled from 'styled-components'

// import required image from images library...
import firstTransactionImage from '../../images/1.jpg'

// Styling...
const Container = styled.div`
    flex: 2;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
    padding: 20px;
    margin-left: 20px;
    &:hover{
        background-color: #fafaf7;
        transform: scale(1.03);
        transition: all 0.25s ease;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    }
`
const Title = styled.span`
  font-weight:700;
  font-size: 20px;
`
const WidgetTable = styled.table`
  width: 100%;
  border-spacing: 30px;
`
const WidgetTableTr = styled.tr`

`
const WidgetTableTh = styled.th`
  text-align: left;
`
const WidgetTableTdCustomer = styled.td`
  display: flex;
  align-items: center;
  
`
const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;

  &:hover{
    transform: scale(3);
    transition: all 0.5s ease;
    border: 1.5px solid yellow;
    border-radius: 20%;
  }
`
const UserName = styled.span`
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
  }
`
const WidgetTableTdDate = styled.td`
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
  }
`
const WidgetTableTdAmount = styled.td`
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
  }
`
const WidgetTableTdStatus = styled.td`
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
  }
`
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: ${props=> props.type === 'Approved'? '#008000ba' : props.type === 'Pending' ? '#ffa600ba': '#ff0000ba'};
  background-color: ${props => props.type === 'Approved' ? '#00800021' : props.type === 'Pending' ? '#ffa60021' : '#ff000021'};
  font-weight: bold;

  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`
const WidgetBody = styled.tbody``

// LargeWidget React Functional Component...
export default function LargeWidget() {
  return (
    <Container>
      <Title>Recent Transactions</Title>
      <WidgetTable>
        <WidgetBody>

        <WidgetTableTr>
          <WidgetTableTh>Customer</WidgetTableTh>
          <WidgetTableTh>Date</WidgetTableTh>
          <WidgetTableTh>Amount</WidgetTableTh>
          <WidgetTableTh>Status</WidgetTableTh>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTdCustomer>
            <Image src={firstTransactionImage}/>
            <UserName>Mike Carol</UserName>
          </WidgetTableTdCustomer>
          <WidgetTableTdDate>22 Aug 2022</WidgetTableTdDate>
          <WidgetTableTdAmount>$ 320.00</WidgetTableTdAmount>
          <WidgetTableTdStatus><Button type="Approved">Approved</Button></WidgetTableTdStatus>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTdCustomer>
            <Image src={firstTransactionImage}/>
            <UserName>Mike Carol</UserName>
          </WidgetTableTdCustomer>
          <WidgetTableTdDate>22 Aug 2022</WidgetTableTdDate>
          <WidgetTableTdAmount>$ 320.00</WidgetTableTdAmount>
          <WidgetTableTdStatus><Button type="Pending">Pending</Button></WidgetTableTdStatus>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTdCustomer>
            <Image src={firstTransactionImage}/>
            <UserName>Mike Carol</UserName>
          </WidgetTableTdCustomer>
          <WidgetTableTdDate>22 Aug 2022</WidgetTableTdDate>
          <WidgetTableTdAmount>$ 320.00</WidgetTableTdAmount>
          <WidgetTableTdStatus><Button type="Approved">Approved</Button></WidgetTableTdStatus>
        </WidgetTableTr>
        <WidgetTableTr>
          <WidgetTableTdCustomer>
            <Image src={firstTransactionImage}/>
            <UserName>Mike Carol</UserName>
          </WidgetTableTdCustomer>
          <WidgetTableTdDate>22 Aug 2022</WidgetTableTdDate>
          <WidgetTableTdAmount>$ 320.00</WidgetTableTdAmount>
          <WidgetTableTdStatus><Button type="Decline">Decline</Button></WidgetTableTdStatus>
        </WidgetTableTr>
        </WidgetBody>
      </WidgetTable>
    </Container>
  )
}
