import React, { useEffect, useMemo, useState } from 'react'

// import styled components for css styling...
import styled from 'styled-components'

// import React Router Dom Library for Routing..
import { Link, useLocation, useNavigate } from 'react-router-dom'

// import required components...
import Charts from '../components/Charts'

// import produts data from dummyData.js file...
import { productsData } from '../Data/dummyData'
import { AddOutlined, Publish } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest } from '../requestAxiosMethod'

// firebase requires functions from firebase library...
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
import { updateProductFailure, updateProductStart, updateProductSuccess } from '../redux/productSlice'

// Styling...
const Container = styled.div`
    flex: 4;
    padding: 20px;
`
const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px;
`
const ProductTitle = styled.h1`

`
const ProductAddNew = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    color: white;
    background-color: #069106;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
`
const ProductTop = styled.div`
    display: flex;
`

const ProductTopLeft = styled.div`
    flex: 1;
    width: 50%;
    margin-top: 10px;
`
const ProductTopRight = styled.div`
    flex: 1;
    height: 155px;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
`
const ProductInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 25px;
`
const ProductInfoBottom = styled.div`
    margin-top: 20px;

`
const ProductInfoImage = styled.img`
   width: 100%;
   height: 100%;
   margin-right: 20px;
   border-radius: 10%;
   object-fit: cover;
`
const ProductInfoName = styled.span`
   font-weight: 600;
   font-size: 25px;
`
const ProductInfoBottomItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`
const ProductInfoBottomKey = styled.span`
    font-weight: 500;
`
const ProductInfoBottomValue = styled.span`
    
`
const ProductBottom = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
`
const ProductBottomForm = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductFormLeftItem = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductItemLabel = styled.label`
    margin-bottom:10px;
`
const ProductItemInput = styled.input`
    margin-bottom: 10px;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    padding-left: 5px;
`
const ProductItemSelect = styled.select`
    margin-bottom: 10px;
    width: 100%;
    border-radius: 5px;
    height: 40px;
    padding: 5px;
`
const ProductItemOption = styled.option`
    
`
const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductFormImageUpload = styled.div`
    display: flex;
    align-items: center;
`
const ProductImage = styled.img`
    width: 200px;
    height: 200px;
`
const ProductImageUploadLabel = styled.label`

`
const ProductImageUploadInput = styled.input`

`
const ProductUpdateButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #069106;
    color: white;
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

// Product Single Page React Functional Component...
export default function ProductSinglePage() {
    // get product by it's id from url...
    const pageUrl = useLocation()
    const productId = pageUrl.pathname.split('/')[2]
    const [productChartInfo, setProductChartInfo] = useState([])
    // get the product from redux by it's _id that comes from url...
    const product = useSelector((state) => state.product.products.find((item) => item._id === productId))

    const months = useMemo(
        () => [
            'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',
        ], []
    );

    useEffect(() => {
        const getOrderedProductInfo = async () => {
            try {
                const response = await userRequest.get("orders/revenues?pid=" + productId )
                // sort response by id..
                const sortedResponse = response.data.sort((a,b)=> a._id - b._id)
                sortedResponse.map((item) => {
                    setProductChartInfo(previous=>[...previous, {name:months[item._id-1], Sales: item.total}])
                })
            } catch (error) {
                
            }
        }
        getOrderedProductInfo()
    }, [months, productId])
    // #################################################
    // handle update product...
    const [inputs, setInputs] = useState({})
    const [categories, setCategories] = useState([])
    const [file, setFile] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // handleChange of inputs in group in onetime...
    const handleChange = (e) => {
        setInputs((previous) => {
            return { ...previous, [e.target.name]: e.target.value}
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
        // upload image & inputs to database throght api post request ...
        const fileName = new Date().getTime + file?.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

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
                const updateProducts = async () => {
                    dispatch(updateProductStart())
                    try {
                        const response = await userRequest.put(`/products/${productId}`, product )
                        dispatch(updateProductSuccess(response.data))
                        .then(navigate('/products'))
                    } catch (error) {
                        dispatch(updateProductFailure())
                    }
                }

                updateProducts();
            });
        }
        );
    }

    return (
        <Container>
            <ProductTitleContainer>
                <ProductTitle>Product Page</ProductTitle>
                <Link to="/newproduct" style={{ color: 'inherit', backgroundColor: 'inherit', textDecoration: 'none' }}>
                    <ProductAddNew>
                        <AddOutlined style={{ fontSize: '18px', marginRight: '5px' }} />
                        New
                    </ProductAddNew>
                </Link>
            </ProductTitleContainer>
            <ProductTop>
                <ProductTopLeft>
                    <Charts data={productChartInfo} title="Product Movements" secondLine="Sales" firstLine="Returns" />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImage src={product.image} alt="" />
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoName>{product.title}</ProductInfoName>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>Serial</ProductInfoBottomKey>
                            <ProductInfoBottomValue>{product._id}</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>Sales</ProductInfoBottomKey>
                            <ProductInfoBottomValue>12500</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                        <ProductInfoBottomItem>
                            <ProductInfoBottomKey>In Stock</ProductInfoBottomKey>
                            <ProductInfoBottomValue>{product.inStock}</ProductInfoBottomValue>
                        </ProductInfoBottomItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductBottomForm>
                    <ProductFormLeft>
                        <ProductFormLeftItem>
                            <ProductItemLabel>Product Name</ProductItemLabel>
                            <ProductItemInput name="title" type="text" placeholder={product.title} onChange={handleChange}/>
                        </ProductFormLeftItem>
                        <ProductFormLeftItem>
                            <ProductItemLabel>Product Description</ProductItemLabel>
                            <ProductItemInput type="text" placeholder={product.description} name="description" onChange={handleChange}/>
                        </ProductFormLeftItem>
                        <ProductFormLeftItem>
                            <ProductItemLabel>Price</ProductItemLabel>
                            <ProductItemInput type="number" placeholder={product.price} name="price" onChange={handleChange}/>
                        </ProductFormLeftItem>
                        <ProductFormLeftItem>
                            <ProductItemLabel>Categories</ProductItemLabel>
                            <ProductItemInput type="text" placeholder="" name="category" onChange={handleCategories}/>
                        </ProductFormLeftItem>
                        <ProductFormLeftItem>
                            <ProductItemLabel>In Stock</ProductItemLabel>
                            <ProductItemSelect name="inStock" id="inStock" onChange={handleChange}>
                                <ProductItemOption value="true">Yes</ProductItemOption>
                                <ProductItemOption value="false">No</ProductItemOption>
                            </ProductItemSelect>
                        </ProductFormLeftItem>
                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductFormImageUpload>
                            <ProductImage src={product.image} alt="" />
                            <ProductImageUploadLabel for="file"><Publish /></ProductImageUploadLabel>
                            <ProductImageUploadInput type="file" id="file" style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])} />
                        </ProductFormImageUpload>
                        <ProductUpdateButton onClick={handleClick}>Update</ProductUpdateButton>
                    </ProductFormRight>
                </ProductBottomForm>
            </ProductBottom>
        </Container>
    )
}
