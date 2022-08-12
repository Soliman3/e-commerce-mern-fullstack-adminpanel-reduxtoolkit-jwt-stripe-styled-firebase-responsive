import React from 'react'
import styled from 'styled-components'

// import icons from mui5 library...
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


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
`
const FooterRight = styled.div`
    flex: 1;
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
            <FooterCenter></FooterCenter>
            <FooterRight></FooterRight>
        </Container>
    )
}
