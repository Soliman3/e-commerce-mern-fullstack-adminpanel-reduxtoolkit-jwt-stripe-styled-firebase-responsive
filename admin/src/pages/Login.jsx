import React from 'react'
import styled from 'styled-components'

// Styling...
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 4;
    flex-direction: column;
`
const Title = styled.h1`
    
`
const UserName = styled.input`
    padding: 8px 15px;
    border-radius: 5px;
    margin: 10px;
    width: 25%;
`
const Password = styled.input`
    padding: 8px 15px;
    border-radius: 10px;
    margin: 10px;
    width: 25%;
`
const LoginButton = styled.button`
    cursor: pointer;
    padding: 8px 15px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background-color: yellow;
    width: 200px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        transform: scale(1.05);
    }
    &:active{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        transform: scale(1.05);
        font-weight: bold;
    }
`
// Login React Functional Page...
export default function Login() {
  return (
      <Container>
          <Title>Sign in to your account</Title>
          <UserName type='text' placeholder='User Name' />
          <Password type='password' placeholder='Password' />
          <LoginButton>Login</LoginButton>
    </Container>
  )
}
