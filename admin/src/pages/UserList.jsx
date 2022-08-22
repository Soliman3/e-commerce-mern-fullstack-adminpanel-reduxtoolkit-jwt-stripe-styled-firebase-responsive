import React, { useState } from 'react'
import styled from 'styled-components'

// import Data Gride for table from mui5 library...
import { DataGrid } from '@mui/x-data-grid';

// import required image from images library...
import AvatarImage from '../images/1.jpg'

// import required icons from mui5 library...
import { DeleteForeverOutlined } from '@mui/icons-material';

// import dummydata...
import { userRows } from '../Data/dummyData';
import { Link } from 'react-router-dom';

// Styling...
const Container = styled.div`
    flex: 4;
`
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const UserImage = styled.img`
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

// UserList React Functional Component...
export default function UserList() {
    // handle deleting item...
    const [data, setData] = useState(userRows)
    const handleDelete = (id)=> {
        setData(data.filter((item)=> item.id !== id))
    }

    // table header row...
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User ', width: 130, renderCell: (params) => {
                return (
                    <UserContainer>
                        <UserImage src={params.row.Avatar} alt="" />
                        {params.row.userName}
                </UserContainer>
            )
        } },
        {
          field: 'email',
          headerName: 'email',
          type: 'email',
          width: 300,
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
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
