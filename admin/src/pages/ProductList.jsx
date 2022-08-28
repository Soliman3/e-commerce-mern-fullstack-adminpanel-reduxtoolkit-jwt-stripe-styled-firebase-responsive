import React, { useEffect } from 'react'
import styled from 'styled-components'

// import Data Gride for table from mui5 library...
import { DataGrid } from '@mui/x-data-grid';

// import required icons from mui5 library...
import { DeleteForeverOutlined } from '@mui/icons-material';

// import dummydata...
import { productRows } from '../Data/dummyData';
// import React Router Dom library for Routing...
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure
} from '../redux/productSlice';

import { publicRequest, userRequest } from '../requestAxiosMethod';
// Styling...
const Container = styled.div`
    flex: 4;
`
const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const ProductImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
`
const EditButton = styled.button`
    cursor: pointer;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-right: 15px;

    &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: yellow;
  }
`
// Product List React Functional Component...
export default function ProductList() {
    // fetching all products from server...
    // useState to caching the state of fetching products...
    const products = useSelector((state)=> state.product.products)
    const dispatch = useDispatch()
    // useEffect for rendering the fetching function and fetch products data from serever...
    useEffect(() => {
        const getProducts = async () => {
                // dispatch start state in reduxtoolkit productSlice...
                dispatch(getProductStart())
            try {
                // fetching...
                const response = await publicRequest.get('/products/find')

                // dispatch payload to reduxtoolkit productSlice...
                dispatch(getProductSuccess(response.data))
                
            } catch (error) {
                // if error happend dispatch error state in reduxtoolkit productSlice...
                dispatch(getProductFailure())
            }     
        }
        // execute the function...
        getProducts()
    },[])
    console.log(products);
    // handling deleting product by id...
    
    const handleDelete = async (id) => {
        // dispatch start state in reduxtoolkit productSlice...
            dispatch(deleteProductStart())
        try {
                // sending delete request to the server with token to delete selected product by it's _id...
            await userRequest.delete(`/products/${id}`)
                // dispatch payload(product._id) to reduxtoolkit productSlice...
                dispatch(deleteProductSuccess(id))
        } catch (error) {
            // if error happend dispatch error state in reduxtoolkit productSlice...
                dispatch(deleteProductFailure())
            }
        }


    // table header row...
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'product', headerName: 'Product ', width: 300, renderCell: (params) => {
                return (
                    <ProductContainer>
                        <ProductImage src={params.row.productImage} alt="" />
                        {params.row.title}
                </ProductContainer>
            )
        } },
        {
          field: 'inStock',
          headerName: 'Stock',
          width: 160,
        },
        
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/"+params.row._id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteForeverOutlined style={{
                            color: 'red',
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: "green" }
                        }}
                            onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
      ];
  return (
    <Container>
        <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        getRowId = {(row)=> row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  )
}
