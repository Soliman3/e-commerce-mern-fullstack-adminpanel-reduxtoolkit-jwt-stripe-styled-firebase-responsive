import React from 'react'
import styled from 'styled-components'

// import icons from mui5 library...
import { AddOutlined, CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'

// import required image from images library...
import UserImage from '../images/1.jpg'

// import React Router dom library for pages routing...
import { Link } from 'react-router-dom'

// Styling...
const Container = styled.div`
    flex: 4;
    padding: 20px;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const EditUser = styled.h1`

`
const AddUser = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #069106;
    color: white;
    display: flex;
    align-items: center;
    justify-content: left;

    &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   }
   &:active{
    background-color: #0ee80e;
  }
`
const UserControl = styled.div`
    display: flex;
    margin-top: 10px;
`
const UserShowTopImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    ` 
const UserShowTopTitle = styled.div`
display: flex;
flex-direction: column;
margin-left: 0px;
`
const UserName = styled.span`

`
const UserJobTitle = styled.span`
font-weight: bold;
`
const UserShow = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-right: 20px;
    border-radius: 10px;

    &:hover{
        background-color: #fafaf7;
        transform: scale(1.03);
        transition: all 0.25s ease;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    }
    &:hover ${UserShowTopImage}{
        transform: scale(2.19);
        transition: all 1s ease;
        border-radius: 20%;
        margin-bottom: 15px;
    }
    &:hover ${UserShowTopTitle}{
        margin-left: 40px;
        transition: all 1s ease;
    }
`
const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`
const UserShowBottom = styled.div`
    
`
const UserShowBottomTitle = styled.div`
    margin-top: 15px;
    font-size: 25px;
`
const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px 10px 10px;
    
    &:hover{
        transform: scale(1.1);
        font-weight: bold;
    }
`
const UserShowInfoItem = styled.span`
    margin-left: 10px;
    font-size: 14px;
`
const UserUpdate = styled.div`
    flex:2;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;

    &:hover{
        background-color: #fafaf7;
        transform: scale(1.03);
        transition: all 0.25s ease;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    }
`
const UserUpdateTitle = styled.span`
    font-size: 25px;
    font-weight: 600;
`
const UserUpdateForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const UserUpdateFormLeft = styled.div`
    display: flex;
    flex:3;
    flex-wrap: wrap;
`

const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:5px;
    margin-right: 15px;
`
const UserUpdateName = styled.label`
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
`
const UserUdateInput = styled.input`
    border-radius: 5px;
    border: 0.5px solid gray;
    padding: 8px 15px;
`
const UserUpdateFormRight = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    margin: 20px;
    gap: 35px;
`
const UserUpateUpload = styled.div`
    
`
const UploadImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
`
const UploadImageLabel = styled.label`

`
const UploadImageInput = styled.input`
    display: none;
`
const UserUpdateButtonAction = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 80%;
    padding: 8px 0px;
    background-color: gray;
    color: white;

    &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
   }
   &:active{
    background-color: #0ee80e;
  }
`

// User Single Page React Functional Component...
export default function UserSinglePage() {
    return (
        <Container>
            <TitleContainer>
                <EditUser>Edit</EditUser>
                <Link to="/newuser">
                <AddUser>
                    <AddOutlined style={{ fontSize: '18px', marginRight: '5px' }} />
                    Create
                </AddUser>
                </Link>
            </TitleContainer>
            <UserControl>
                <UserShow>
                    <UserShowTop>
                        <UserShowTopImage src={UserImage} alt='' />
                        <UserShowTopTitle>
                            <UserName>Jone Biker</UserName>
                            <UserJobTitle>Digital Marketing Manager</UserJobTitle>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowBottomTitle>Account Details</UserShowBottomTitle>
                        <UserShowInfo>
                            <PermIdentity style={{fontSize: '18px'}}/>
                            <UserShowInfoItem>jonebiker77</UserShowInfoItem>
                        </UserShowInfo>
                        <UserShowInfo>
                            <CalendarToday style={{fontSize: '18px'}}/>
                            <UserShowInfoItem>20/02/1987</UserShowInfoItem>
                        </UserShowInfo>
                        <UserShowInfo>
                            <PhoneAndroid style={{fontSize: '18px'}}/>
                            <UserShowInfoItem>+201201313455</UserShowInfoItem>
                        </UserShowInfo>
                        <UserShowInfo>
                            <MailOutline style={{fontSize: '18px'}}/>
                            <UserShowInfoItem>jonebiker77@gmail.com</UserShowInfoItem>
                        </UserShowInfo>
                        <UserShowInfo>
                            <LocationSearching style={{fontSize: '18px'}}/>
                            <UserShowInfoItem>California | US</UserShowInfoItem>
                        </UserShowInfo>
                    </UserShowBottom>
                </UserShow>
                <UserUpdate>
                    <UserUpdateTitle>Edit User</UserUpdateTitle>
                    <UserUpdateForm>
                        <UserUpdateFormLeft>
                            <UserUpdateItem>
                                <UserUpdateName>User Name</UserUpdateName>
                                <UserUdateInput placeholder='jonemike77' type="text" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <UserUpdateName>Full Name</UserUpdateName>
                                <UserUdateInput placeholder='Jone Mike' type="text" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <UserUpdateName>E-mail</UserUpdateName>
                                <UserUdateInput placeholder='jonemike77@gmail.com' type="text" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <UserUpdateName>Phone</UserUpdateName>
                                <UserUdateInput placeholder='+201201313455' type="text" />
                            </UserUpdateItem>
                            <UserUpdateItem>
                                <UserUpdateName>Address</UserUpdateName>
                                <UserUdateInput placeholder='California | US' type="text" />
                            </UserUpdateItem>
        
                        </UserUpdateFormLeft>
                        <UserUpdateFormRight>
                            <UserUpateUpload>
                                <UploadImage src={UserImage} alt="" />
                                <UploadImageLabel htmlFor='file' ><Publish/></UploadImageLabel>
                                <UploadImageInput type='file' id="file"/>
                            </UserUpateUpload>
                            <UserUpdateButtonAction>Update User</UserUpdateButtonAction>
                        </UserUpdateFormRight>
                    </UserUpdateForm>
                </UserUpdate>
            </UserControl>
        </Container>
    )
}
