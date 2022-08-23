import React from 'react'
import styled from 'styled-components'

// Styling...
const Container = styled.div`
    flex: 4;
    padding: 20px; 
`
const NewUserTitle = styled.h1`

`
const NewUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const NewUserFormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:5px;
    margin-right: 25px;
    width: 500px;
`
const NewUserFormLabel = styled.label`
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
`
const NewUserFormInput = styled.input`
    border-radius: 5px;
    border: 0.5px solid gray;
    padding: 8px 15px;
    height: 25px;
`
const NewUserFormGender = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
`
const NewUserFormGenderLabel = styled.label`
    margin-right: 20px;
`
const MaleLabel = styled.label`
    margin: 10px;
`
const FemaleLabel = styled.label`
    margin: 10px;
`
const NewUserFormSelect = styled.select`
    border-radius: 5px;
    height: 40px;
    width: 35%;
`
const NewUserFormOption = styled.option`
    
`
const NewUserFormSubmitButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #069106;
    color: white;
    width: 15%;
    margin-top: 25px;
    // when hover on button...
    &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    // when active on button...
    &:active{
    background-color: #0ee80e;
    }

`
// NewUser react functional component...
export default function NewUser() {
    return (
        <Container>
            <NewUserTitle>Add New User</NewUserTitle>
            <NewUserForm>
                <NewUserFormItem>
                    <NewUserFormLabel>User Name</NewUserFormLabel>
                    <NewUserFormInput type="text" placeholder="User Name" />
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormLabel>Full Name</NewUserFormLabel>
                    <NewUserFormInput type="text" placeholder="Michel Mouses" />
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormLabel>Phone</NewUserFormLabel>
                    <NewUserFormInput type="text" placeholder="+201201313455" />
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormLabel>Email</NewUserFormLabel>
                    <NewUserFormInput type="email" placeholder="michelmouses22@gmail.com" />
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormLabel>Password</NewUserFormLabel>
                    <NewUserFormInput type="password" placeholder="password" />
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormGender>
                        <NewUserFormGenderLabel>Gender</NewUserFormGenderLabel>
                        <NewUserFormInput type="radio" name='gender' id='male' value='male' />
                        <MaleLabel for='male'>Male</MaleLabel>
                        <NewUserFormInput type="radio" name='gender' id='female' value='female' />
                        <FemaleLabel for='female'>Female</FemaleLabel>
                    </NewUserFormGender>
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormLabel>Address</NewUserFormLabel>
                    <NewUserFormInput type="text" placeholder="California | US" />
                </NewUserFormItem>
                <NewUserFormItem>
                    <NewUserFormLabel>Active</NewUserFormLabel>
                    <NewUserFormSelect name="active" id="active">
                        <NewUserFormOption value="yes">Yes</NewUserFormOption>
                        <NewUserFormOption value="no">No</NewUserFormOption>
                    </NewUserFormSelect>
                </NewUserFormItem>
                <NewUserFormSubmitButton>Submit</NewUserFormSubmitButton>
            </NewUserForm>
        </Container>
    )
}
