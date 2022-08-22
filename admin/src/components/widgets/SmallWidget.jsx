import React from 'react'
import styled from 'styled-components'


// import icons from mui5 library...
import { Visibility } from '@mui/icons-material'

// import required image from images library...
import firstMemberImage from '../../images/1.jpg'

// Styling...
const Container = styled.div`
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
    padding: 20px;
    margin-right: 20px;

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
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`
const UserImageContainer = styled.div`
  flex:1;
`
const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 15px;
  z-index: 2000;

  &:hover{
    transform: scale(3);
    transition: all 0.5s ease;
    border: 1.5px solid yellow;
    border-radius: 20%;
  }
`
const UserDetails = styled.div`
  flex:6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover{
    transform: scale(1.1);
    font-weight: bold;
   
  }
`
const UserName = styled.span`
  font-weight: 500;
`
const UserJobTitle = styled.span`
  font-weight: 300;
`
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`
export default function SmallWidget() {
  return (
    <Container>
      <Title>New Join Team</Title>
      <List>
        <Item>
          <UserImageContainer>
            <UserImage src={firstMemberImage} />
          </UserImageContainer>
          <UserDetails>
            <UserName>Jone Dewany</UserName>
            <UserJobTitle>Logistics manager</UserJobTitle>
          </UserDetails>
          <Button>
            <Visibility style={{marginRight: '10px', fontSize:'18px', opacity: '50% '}}/>
            Display
          </Button>
        </Item>
        <Item>
          <UserImageContainer>
            <UserImage src={firstMemberImage} />
          </UserImageContainer>
          <UserDetails>
            <UserName>Jone Dewany</UserName>
            <UserJobTitle>Logistics manager</UserJobTitle>
          </UserDetails>
          <Button>
            <Visibility style={{marginRight: '10px', fontSize:'18px', opacity: '50% '}}/>
            Display
          </Button>
        </Item>
        <Item>
          <UserImageContainer>
            <UserImage src={firstMemberImage} />
          </UserImageContainer>
          <UserDetails>
            <UserName>Jone Dewany</UserName>
            <UserJobTitle>Logistics manager</UserJobTitle>
          </UserDetails>
          <Button>
            <Visibility style={{marginRight: '10px', fontSize:'18px', opacity: '50% '}}/>
            Display
          </Button>
        </Item>
        <Item>
          <UserImageContainer>
            <UserImage src={firstMemberImage} />
          </UserImageContainer>
          <UserDetails>
            <UserName>Jone Dewany</UserName>
            <UserJobTitle>Logistics manager</UserJobTitle>
          </UserDetails>
          <Button>
            <Visibility style={{marginRight: '10px', fontSize:'18px', opacity: '50% '}}/>
            Display
          </Button>
        </Item>
        <Item>
          <UserImageContainer>
            <UserImage src={firstMemberImage} />
          </UserImageContainer>
          <UserDetails>
            <UserName>Jone Dewany</UserName>
            <UserJobTitle>Logistics manager</UserJobTitle>
          </UserDetails>
          <Button>
            <Visibility style={{marginRight: '10px', fontSize:'18px', opacity: '50% '}}/>
            Display
          </Button>
        </Item>
      </List>
    </Container>
  )
}
