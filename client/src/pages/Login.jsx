import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// import required image from images folder...
import backgroundImage from '../images/homeAppliances.jpg'
import { loginFailer, loginStart, loginSuccess } from '../redux/userSlice'
import { publicRequest } from '../requestAxiosMethod'

// for responsive design For login page...
import { mobile } from '../responsive'

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
  ${mobile({width:'70%'})}
`
const LoginFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  font-size: 18px;

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
const ErrorLogin = styled.span`
  font-size: 12px;
  color: red;
`

// Login react functional component...
export default function Login() {
  // ###############################3
  // login...
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.user)

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginStart())
    try {
      const response = await publicRequest.post('/auth/signin', {username, password})
      dispatch(loginSuccess(response.data))
      console.log(response.data)
    } catch (error) {
      dispatch(loginFailer())
    }
  }
  return (
    <Container prop={backgroundImage}>
      <Wrapper>
        <LoginFormWrapper>
          <LoginTitle>SIGN IN TO YOUR ACCOUNT</LoginTitle>
          <LoginForm>
            <LoginInput placeholder='User Name' onChange={(e)=>setUsername(e.target.value)} />
            <LoginInput placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)} />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            {user.error && <><ErrorLogin>Wrong username or password , please try again</ErrorLogin></>}
            <Link>Forget your password?</Link>
            <Link>Create a new account</Link>
          </LoginForm>
        </LoginFormWrapper>
      </Wrapper>
    </Container>
  )
}
