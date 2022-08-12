import React from 'react'
import styled from 'styled-components'

// import icons from mui5 library...
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';

// import paymentImage from images folder...
import PaymentTestImage from '../images/PaymentImage.png'


//Styling...
const Container = styled.div`
   display: flex;
`
const FooterLeft = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const FooterCenter = styled.div`
    flex: 1;
    padding: 20px;
`
const FooterCenterTitle = styled.h3`
    margin-bottom: 25px;
`
const FooterCenterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const FooterCenterListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const FooterRight = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const FooterRightTitle = styled.h3`
    
`
const ContactItem = styled.span`
    display: flex;
    gap: 15px;
    align-items: center;

`
const PaymentImage = styled.img`
    width: 50%;

`
const Brandlogo = styled.h1`
    
`
const Description = styled.p`
    margin: 25px 0px;
`
const SocialIconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const SocialIcons = styled.div`
    color: white;
    background-color:#${props => props.backgroundColor} ;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
// Footer react functional component...
export default function Footer() {
    return (
        <Container>
            <FooterLeft>
                <Brandlogo>Logo</Brandlogo>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam reprehenderit possimus architecto dignissimos perferendis. A deserunt consectetur ratione sint!</Description>
                <SocialIconsContainer>
                    <SocialIcons backgroundColor='3b5999'>
                        <FacebookIcon/>
                    </SocialIcons>
                    <SocialIcons backgroundColor='e4405f'>
                        <InstagramIcon/>
                    </SocialIcons>
                    <SocialIcons backgroundColor='e60023'>
                        <PinterestIcon/>
                    </SocialIcons>
                    <SocialIcons backgroundColor='55acee'>
                        <TwitterIcon/>
                    </SocialIcons>
                    <SocialIcons backgroundColor='FF0000'>
                        <YouTubeIcon/>
                    </SocialIcons>
                </SocialIconsContainer>
            </FooterLeft>
            <FooterCenter>
                <FooterCenterTitle>Useful Links</FooterCenterTitle>
                <FooterCenterList>
                    <FooterCenterListItem>Home</FooterCenterListItem>
                    <FooterCenterListItem>Cart</FooterCenterListItem>
                    <FooterCenterListItem>Mobiles</FooterCenterListItem>
                    <FooterCenterListItem>Accessories</FooterCenterListItem>
                    <FooterCenterListItem>Home Appliances</FooterCenterListItem>
                    <FooterCenterListItem>My Account</FooterCenterListItem>
                    <FooterCenterListItem>Order Tracking</FooterCenterListItem>
                    <FooterCenterListItem>Terms and conditions</FooterCenterListItem>
                </FooterCenterList>
            </FooterCenter>
            <FooterRight>
                <FooterRightTitle>Contact</FooterRightTitle>
                <ContactItem>
                    <LocationOnIcon/>
                1673 Woodland Terrace, Sacramento, California 95814
                </ContactItem>
                <ContactItem>
                    <PhoneIcon/>
                +1 2345 56 24
                </ContactItem>
                <ContactItem>
                    <GitHubIcon/>
                www.github.com/asoliman3
                </ContactItem>
                <PaymentImage src={PaymentTestImage}/>
            </FooterRight>
        </Container>
    )
}
