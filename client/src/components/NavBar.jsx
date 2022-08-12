import React from 'react'

// import styled component library for styling...
import styled from 'styled-components'

// import icons from MUI5 library...
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// Styling...
const Container = styled.div`
    height:55px;
    padding: 10px 20px;
    
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
`
const SearchContainer = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-left:25px;
    padding: 15px;
    width: 100%;
`
const SearchInput = styled.input`
    border: none;
    width:100%;
`

const LeftSideNavBar = styled.div`
    flex: 1;
    text-align: left;
`
const BrandLogo = styled.h1`
    font-weight: bold;
`
const RightSideNavBar = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    cursor:pointer;
    font-size: 14px;
    margin-left: 25px;
`
// NavBar react functional component...
export default function NavBar() {
    return (
        <Container>
            <WrapperContainer>
                
                <LeftSideNavBar>
                    <BrandLogo>Logo</BrandLogo>
                </LeftSideNavBar>
                <CenterSideNavBar>
                    
                    <SearchContainer>
                        <SearchInput />
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
