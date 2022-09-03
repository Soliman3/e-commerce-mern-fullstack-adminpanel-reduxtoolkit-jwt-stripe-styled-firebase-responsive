import React, { useState } from 'react'
// import styled components library for css styling...
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import { useDispatch } from 'react-redux';
import { addProductFailure, addProductStart, addProductSuccess } from '../redux/productSlice';
import { userRequest } from '../requestAxiosMethod';

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
const NewProductLabelSelect = styled.select`
    border-radius: 10px;
    padding: 8px 15px;
    width: 20%;
`
const NewProductLabelOption = styled.option`
    border-radius: 10px;
    padding: 8px 15px;
    width: 20%;
`

// New Product React Functional Component...
export default function NewProduct() {
    // handle state of product inputs...
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState()
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
    
    // handleChange of inputs in group in onetime...
    const handleChange = (e) => {
        setInputs((previous) => {
            return {...previous, [e.target.name]: e.target.value}
        })
    }
    // handle state of categories and split categories by split method...
    const handleCategories = (e) => {
        setCategories(e.target.value.split(','))
    }
    // send payload to server by axios post method...
    const handleClick = (e) => {
        // prevent default event (reloading page) when click create...
        e.preventDefault()
        // upload image & inputs to database throght api post request ......
        const fileName = new Date().getTime + file?.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName)

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                    break;
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const product = { ...inputs, image: downloadURL, category: categories }
                console.log(product);
                const addProducts = async () => {
                    dispatch(addProductStart())
                    try {
                        const response = await userRequest.post('/products/', product )
                        dispatch(addProductSuccess(response.data))
                    } catch (error) {
                        dispatch(addProductFailure())
                    }
                }

                addProducts();
            });
        }
        ); 
       
    }
console.log(file);
  return (
    <Container>
          <NewProductTitle>Add New Product</NewProductTitle>
          <NewProductItem>
              <NewProductLabel>Title</NewProductLabel>
              <NewProductInput type='text' placeholder='Product Title' name='title' onChange={handleChange}/>
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Price</NewProductLabel>
              <NewProductInput type='number' placeholder='Product Price' name='price' onChange={handleChange}/>
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Description</NewProductLabel>
              <NewProductInput type='text' placeholder='Description' name='description' onChange={handleChange}/>
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Categories</NewProductLabel>
              <NewProductInput type='text' placeholder='phones,accessories' onChange={handleCategories} />
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>stock</NewProductLabel>
              <NewProductLabelSelect name="inStock" onChange={handleChange}>
                  <NewProductLabelOption value='true'>Yes</NewProductLabelOption>
                  <NewProductLabelOption value='false'>No</NewProductLabelOption>
             </NewProductLabelSelect>
          </NewProductItem>
          <NewProductItem>
              <NewProductLabel>Upload Product Image</NewProductLabel>
              <NewProductInput type='file' id='file' onChange={(e)=> setFile(e.target.files[0])}/>
          </NewProductItem>
          <AddNewProductButtom onClick={handleClick}>Create</AddNewProductButtom>
    </Container>
  )
}
