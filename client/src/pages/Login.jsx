import React from 'react'
import styled from 'styled-components'

// import required image from images folder...
import backgroundImage from '../images/homeAppliances.jpg'


// Styling...
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:linear-gradient(#ffffff95, #ffffff98), url(${backgroundImage}) center;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  border-radius: 15px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  background-color: #f6f1f1;
  padding: 25px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const LoginForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const LoginTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`
const LoginInput = styled.input`
  
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
`

const LoginButton = styled.button`
  padding: 15px 0px ;
  border: 2px solid black;
  width: 85%;
  background-color: transparent;
  border-radius: 19px;
  font-size: 18px;
  margin-top: 25px;
  cursor: pointer;

  &:hover{
    background-color: aqua;
    border-radius: 19px;
    border: none; 
    transform: scale(0.9);
    transition: all 1s ease;
  }
  &:active{
    background-color: transparent;
    border: 2px solid aqua;
    transform: scale(1);
  }
`
const Link = styled.a`
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  color: blue;
  font-weight: 400;
`

// Login react functional component...
export default function Login() {
  return (
    <Container prop={backgroundImage}>
      <Wrapper>
        <LoginForm>
          <LoginTitle>SIGN IN TO YOUR ACCOUNT</LoginTitle>
          <LoginForm>
            <LoginInput placeholder='User Name'/>
            <LoginInput placeholder='Password'/>
            <LoginButton>Login</LoginButton>
            <Link>Forget your password?</Link>
            <Link>Create a new account</Link>
          </LoginForm>
        </LoginForm>
      </Wrapper>
    </Container>
  )
}
