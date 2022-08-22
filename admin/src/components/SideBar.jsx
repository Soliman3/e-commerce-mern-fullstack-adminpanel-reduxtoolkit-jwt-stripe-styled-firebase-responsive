import React from 'react'
import styled from 'styled-components'

// import icons from mui5 library...
import {
  Apps,
  Timeline,
  TrendingUp,
  EmailOutlined,
  PersonOutlined,
  LocalMallOutlined,
  DescriptionOutlined,
  MarkChatReadOutlined,
  CurrencyBitcoinOutlined,
  AssignmentTurnedInOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Styling...
const Container = styled.div`
  flex: 1;
  height: calc(100vh - 65px);
  position: sticky;
  top:65px;
  overflow-y:scroll;
  overflow-x:hidden;
  z-index: 2;

    ::-webkit-scrollbar {
        width: 8px;   
    }

    ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
    }
    
    ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 25px;
    }
`
const Wrapper = styled.div`
  padding: 20px;
  height: calc(100vh);
  top:65px;
`
const Menu = styled.div`
  margin-bottom: 10px;
`
const SideBarTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 15px;
  color: #4f4d4d;
`
const SideBarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const SideBarItem = styled.li`
  cursor: pointer;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  background-color: #ebe7e7;
  width: 85%;

  &:hover {
    background-color: yellow;
    transform: scale(1.1);
    transition: all 0.15s ease;
  }
  &:active {
    background-color: gray;
    transform: scale(1.1);
    color: white;
  }
  
  `

// SideBar React Functional Component...
export default function SideBar() {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <SideBarTitle>DashBoard</SideBarTitle>
          <SideBarList>
            <Link to="/" style={{color:'inherit', backgroundColor: 'inherit', textDecoration: 'none'}}>
            <SideBarItem >
              <Apps style={{ fontSize: '18px' }} />
              Home
            </SideBarItem>
            </Link>
            <SideBarItem>
              <Timeline style={{ fontSize: '18px' }} />
              Analytics
            </SideBarItem>
            <SideBarItem>
              <TrendingUp style={{ fontSize: '18px' }} />
              Sales
            </SideBarItem>


          </SideBarList>
        </Menu>
        <Menu>
          <SideBarTitle>Quick Menu</SideBarTitle>
          <SideBarList>
          <Link to="/users" style={{color:'inherit', backgroundColor: 'inherit', textDecoration: 'none'}}>
            <SideBarItem>
              <PersonOutlined style={{ fontSize: '18px' }} />
              Users
              </SideBarItem>
              </Link>
            <SideBarItem>
              <LocalMallOutlined style={{ fontSize: '18px' }} />
              Products
            </SideBarItem>
            <SideBarItem>
              <CurrencyBitcoinOutlined style={{ fontSize: '18px' }} />
              Transactions
            </SideBarItem>
            <SideBarItem>
              <DescriptionOutlined style={{ fontSize: '18px' }} />
              Reports
            </SideBarItem>

          </SideBarList>
        </Menu>
        <Menu>
          <SideBarTitle>Notification</SideBarTitle>
          <SideBarList>

            <SideBarItem >
              <EmailOutlined style={{ fontSize: '18px' }} />
              Mail
            </SideBarItem>
            <SideBarItem>
              <AssignmentTurnedInOutlined style={{ fontSize: '18px' }} />
              Feedback
            </SideBarItem>
            <SideBarItem>
              <MarkChatReadOutlined style={{ fontSize: '18px' }} />
              Messages
            </SideBarItem>


          </SideBarList>
        </Menu>
        <Menu>
          <SideBarTitle>Staff</SideBarTitle>
          <SideBarList>

            <SideBarItem >
              <Apps style={{ fontSize: '18px' }} />
              Manage
            </SideBarItem>
            <SideBarItem>
              <Timeline style={{ fontSize: '18px' }} />
              Analytics
            </SideBarItem>
            <SideBarItem>
              <TrendingUp style={{ fontSize: '18px' }} />
              Reports
            </SideBarItem>


          </SideBarList>
        </Menu>
        <Menu>
          <SideBarTitle>Financial Indecators</SideBarTitle>
          <SideBarList>

            <SideBarItem >
              <Apps style={{ fontSize: '18px' }} />
              Total Revenues
            </SideBarItem>
            <SideBarItem>
              <Timeline style={{ fontSize: '18px' }} />
              Net Income
            </SideBarItem>
            <SideBarItem>
              <TrendingUp style={{ fontSize: '18px' }} />
              Financial Position
            </SideBarItem>


          </SideBarList>
        </Menu>
      </Wrapper>
    </Container>
  )
}
