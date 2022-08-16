import React from 'react'

// for responsive design NavBar...
import {mobile} from '../responsive'

// import styled component library for styling...
import styled from 'styled-components'

// import icons from MUI5 library...
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

// Styling...
const Container = styled.div`
    height:50px;
    padding: 10px 20px;
    ${mobile({ height: '35px', padding:'10px 20px 15px 20px' })};
    align-items: center;

`
const WrapperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CenterSideNavBar = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const LanguageOption = styled.span`
    cursor: pointer;
    font-size: 14px;
    ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-left:25px;
    padding: 15px;
    width: 100%;
    ${mobile({padding: '10px'})}
`
const SearchInput = styled.input`
    border: none;
    width:100%;
    outline: none;
    ${mobile({width: '50px'})}
`

const LeftSideNavBar = styled.div`
    flex: 1;
    text-align: left;
    ${mobile({flex: '0.25'})}
`
const BrandLogo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: '18px' })}
    cursor: pointer;
`
const RightSideNavBar = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: 'center'})}
`
const MenuItem = styled.div`
    cursor:pointer;
    font-size: 14px;
    margin-left: 25px;
    ${mobile({marginLeft: '10px',fontSize: '12px'})};
`
// NavBar react functional component...
export default function NavBar() {
    const navigate = useNavigate()
    const handleNavigate = ()=> {
        navigate('/')
    }
    return (
        <Container>
            <WrapperContainer>
                
                <LeftSideNavBar>
                    <BrandLogo onClick={handleNavigate}>Logo</BrandLogo>
                </LeftSideNavBar>
                <CenterSideNavBar>
                    
                    <SearchContainer>
                        <SearchInput placeholder='Search'/>
                        <SearchIcon style={{fontSize: "16px", color: "gray"}}/>
                    </SearchContainer>
                </CenterSideNavBar>
                <RightSideNavBar>
                <LanguageOption>AR</LanguageOption>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={99}>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </RightSideNavBar>
            </WrapperContainer>
        </Container>
    )
}
