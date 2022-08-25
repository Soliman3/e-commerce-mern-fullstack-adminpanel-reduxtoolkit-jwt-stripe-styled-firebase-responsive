import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginStart, loginSuccess, loginFailer, logOut } from '../redux/userSlice';
import { publicRequest } from '../requestAxiosMethod';

// import icons form mui5 library...
import {Visibility, VisibilityOff} from '@mui/icons-material';

// use navigate...
import { Navigate, useNavigate } from 'react-router-dom';

// Styling...
const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
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
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const ErrorMessage = styled.span`
    color: red;
    display: flex;
    text-align: center;
`
const PasswordInputContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 0;
    width: 38%;
    
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
            response?.data?.isAdmin && dispatch(loginSuccess(response.data))
            response?.data?.isAdmin !== true && setIsAdmin(false)
            response?.data?.isAdmin !== true && dispatch(logOut())
            navigate('/')
        } catch (error) {
            dispatch(loginFailer())
            
        }
    }
    // Error message if not authorized to enter admin panel...
    const [isAdmin, setIsAdmin] = useState(true)

    // Error message if wrong username or password...
    const user = useSelector((state) => state.user)
    
    // handle password visibility...
    const [isVisible, setIsVisible] = useState('password')
    return (
        <Container>

            <Title>Sign in to your account</Title>
            <LoginForm>
                <UserName type='text' placeholder='User Name' onChange={(e) => setUsername(e.target.value)} />
                <PasswordInputContainer>
                    {isVisible === 'password' ? (<VisibilityOff style={{ color: 'gray', fontSize: '14px', cursor: 'pointer' }} onClick={() => setIsVisible('text')}/>)
                        : (<Visibility style={{ color: 'gray', fontSize: '14px', cursor: 'pointer' }} onClick={() => setIsVisible('password')} />)}
                    
                    
                </PasswordInputContainer>
                <Password type={isVisible} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <LoginButton onClick={handleLogin}>Login</LoginButton>
            </LoginForm>
            {!user.error ? isAdmin !== true && (<><ErrorMessage>You are not Authorized !!!</ErrorMessage></>)
                : (user.error && <><ErrorMessage>Wrong username or password , please try again</ErrorMessage></>)}
        </Container>
    )
}
