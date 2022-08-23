import React, { useState } from 'react'
import styled from 'styled-components'

// import Data Gride for table from mui5 library...
import { DataGrid } from '@mui/x-data-grid';

// import required icons from mui5 library...
import { DeleteForeverOutlined } from '@mui/icons-material';

// import dummydata...
import { productRows } from '../Data/dummyData';
// import React Router Dom library for Routing...
import { Link } from 'react-router-dom';
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
    const [data, setData] = useState(productRows)
    const handleDelete = (id)=> {
        setData(data.filter((item)=> item.id !== id))
    }

    // table header row...
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product ', width: 300, renderCell: (params) => {
                return (
                    <ProductContainer>
                        <ProductImage src={params.row.productImage} alt="" />
                        {params.row.productName}
                </ProductContainer>
            )
        } },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 160,
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
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
                        <Link to={"/product/"+params.row.id}>
                            <EditButton>Edit</EditButton>
                        </Link>
                        <DeleteForeverOutlined style={{ color: 'red', cursor: 'pointer', '&:hover': { backgroundColor: "green" } }} onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        },
      ];
  return (
    <Container>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  )
}
