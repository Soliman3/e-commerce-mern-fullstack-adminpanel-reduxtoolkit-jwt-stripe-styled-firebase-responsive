import React from 'react'
import styled from 'styled-components'

// Styling...
const Container = styled.div`
    flex: 4;
`
const NewUserTitle = styled.h1`

`
const NewUserForm = styled.form`
    
`
const NewUserFormItem = styled.div`
    
`
const NewUserFormLabel = styled.label`
    
`
const NewUserFormInput = styled.input`
    
`
const NewUserFormGender = styled.div`

`
const MaleLabel = styled.label`
    
`
const FemaleLabel = styled.label`

`
const NewUserFormSelect = styled.select`
    
`
const NewUserFormOption = styled.option`
    
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
                        <NewUserFormLabel>Gender</NewUserFormLabel>
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
            </NewUserForm>
        </Container>
    )
}
