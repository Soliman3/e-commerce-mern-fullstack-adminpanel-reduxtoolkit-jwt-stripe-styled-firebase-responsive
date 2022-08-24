import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginStart, loginSuccess, loginFailer } from '../redux/userSlice';
import { publicRequest } from '../requestAxiosMethod';

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
const LoginForm = styled.form`
    
`
// Login React Functional Page...
export default function Login() {
    // useState for user name and password to sending it to axios post method authentication...
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // handle login function...
    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const response = await publicRequest.post('/auth/signin', { username, password })
            dispatch(loginSuccess(response.data)).then(navigate('/'))
        } catch (error) {
            dispatch(loginFailer())
        }
    }
    return (
        <Container>
            <Title>Sign in to your account</Title>
            <LoginForm>
                <UserName type='text' placeholder='User Name' onChange={(e) => setUsername(e.target.value)} />
                <Password type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <LoginButton onClick={handleLogin}>Login</LoginButton>
            </LoginForm>
        </Container>
    )
}
