import React from 'react'
import styled from 'styled-components'

// Styling...
const Container = styled.div`
    flex:4;
    
    
`
const NewProductTitle = styled.h1`
   
`
const NewProductItem = styled.div`
    
`
const NewProductLabel = styled.label`
    
`
const NewProductInput = styled.input`
    
`
const AddNewProductButtom = styled.button`
    
`
//########################################
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
