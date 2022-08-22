import React from 'react'
import styled from 'styled-components'

// import icons from mui5 library...
import {
    SettingsOutlined,
    NotificationsNone,
    PowerSettingsNewOutlined
} from '@mui/icons-material/';

// import required image from images library...
import profilePhoto from '../images/1.jpg'

// Styling...
const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    position: sticky;
    top: 0;
    z-index: 100;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: yellow;
    color: black;
    height: 100%;
    padding: 0px 35px 0px 25px;
`
const TopBarLeft = styled.div`
    
`
const BrandLogo = styled.span`
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    
    
`
const TopBarRight = styled.div`
    display: flex;
    gap:20px;
    align-items: center;
    justify-content: center;
`
const TopBarRightIcons = styled.div`
    position: relative;
    cursor: pointer;
`
const TopBarRightBadge = styled.span`
    position: absolute;
    background-color: red;
    color: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    top:-5px;
    right: -3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    
`
const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
const TopBarNotificationNumber = styled.span`
    font-size: 12px;
    margin-bottom: 2px;
`
export default function TopBar() {
    return (
        <Container>
            <Wrapper>
                <TopBarLeft>
                    <BrandLogo>SOLIMAN</BrandLogo>
                </TopBarLeft>
                <TopBarRight>
                    <TopBarRightIcons>
                        <PowerSettingsNewOutlined style={{ fontSize: '20px' }} />
                    </TopBarRightIcons>
                    <TopBarRightIcons>
                        <SettingsOutlined style={{ fontSize: '20px' }} />
                    </TopBarRightIcons>
                    <TopBarRightIcons>
                        <NotificationsNone style={{ fontSize: '20px' }} />
                        <TopBarRightBadge>
                            <TopBarNotificationNumber>2</TopBarNotificationNumber>
                        </TopBarRightBadge>
                    </TopBarRightIcons>
                    <ProfileImage src={profilePhoto} alt='Profile Image' />
                </TopBarRight>
            </Wrapper>
        </Container>
    )
}
