import React from 'react'
// import styled components library for css styling...
import styled from 'styled-components'

// Styling...
const Container = styled.div`
    flex:4;
    display: flex;
    flex-direction: column;
    margin: 20px;
    
`
const NewProductTitle = styled.h1`
    margin-bottom: 25px;
`
const NewProductItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const NewProductLabel = styled.label`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
`
const NewProductInput = styled.input`
    border-radius: 10px;
    padding: 8px 15px;
    width: 20%;
`
const AddNewProductButtom = styled.button`
    width: 10%;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #069106;
    color: white;
    margin-top: 25px;
    margin-left: 25px;
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

// New Product React Functional Component...
export default function NewProduct() {
  return (
    <Container>
          <NewProductTitle>Add New Product</NewProductTitle>
          <NewProductItem>
              <NewProductLabel>Product Name</NewProductLabel>
              <NewProductInput type='text' placeholder='Iphone 12mini' />
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Product Name</NewProductLabel>
              <NewProductInput type='text' placeholder='Iphone 12mini' />
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Product Name</NewProductLabel>
              <NewProductInput type='text' placeholder='Iphone 12mini' />
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Upload Product Image</NewProductLabel>
              <NewProductInput type='file' id='file' />
          </NewProductItem>
          <AddNewProductButtom>Create</AddNewProductButtom>
    </Container>
  )
}
