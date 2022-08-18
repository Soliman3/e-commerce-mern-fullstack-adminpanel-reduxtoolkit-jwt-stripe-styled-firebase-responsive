import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// import required image from images folder...
import backgroundImage from '../images/homeAppliances.jpg'

// for responsive design RegisterPage...
import { mobile } from '../responsive'

// Styling...
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background:linear-gradient(#ffffff95, #ffffff98), url(${backgroundImage}) center;
  background-size: auto;
  width: 100vw;
  height: 100vh;
  border-radius: 15px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  ${mobile({width:'70%'})}
  background-color: #f6f1f1;
  padding: 25px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  
`
const RegisterFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
const RegisterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
`
const RegisterTitle = styled.h1`
  font-size: 25px;
`
const RegisterInput = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 15px 10px 15px;
  border-radius: 10px;
  border: none;
`
const RegisterAgreement = styled.span`
  font-size: 12px;
  margin: 20px 0px ;
`
const RegisterButton = styled.button`
  padding: 15px 20px;
  border: 2px solid black;
  width: 40%;
  background-color: transparent;
  font-size: 18px;
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
// Register react functional component...
export default function Register() {
  // ##########################
  // register...
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/auth/signup', {firstName, lastName, username, email, password }).then(navigate('/login'))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container prop={backgroundImage}>
      <Wrapper>
        <RegisterFormWrapper>
          <RegisterTitle>CREATE NEW ACCOUNT</RegisterTitle>
          <RegisterForm>
            <RegisterInput placeholder='First Name' onChange={(e)=> setFirstName(e.target.value)} />
            <RegisterInput placeholder='Last Name' onChange={(e)=> setLastName(e.target.value)} />
            <RegisterInput placeholder='User Name' onChange={(e)=> setUsername(e.target.value)} />
            <RegisterInput placeholder='email' onChange={(e)=> setEmail(e.target.value)} />
            <RegisterInput placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
            <RegisterInput placeholder='Confirem Password' onChange={(e)=> setConfirmPassword(e.target.value)} />
            <RegisterAgreement>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat officiis necessitatibus quas iste architecto quibusdam voluptatem, quia numquam vel iure optio! Pariatur non adipisci asperiores eius? Maxime, fuga ab exercitationem aut in dicta, labore odit amet aperiam fugit ea.
            </RegisterAgreement>
            <RegisterButton onClick={handleRegister}>CREATE</RegisterButton>
          </RegisterForm>
        </RegisterFormWrapper>
      </Wrapper>
    </Container>
  )
}
