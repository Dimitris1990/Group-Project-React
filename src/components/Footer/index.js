import React from 'react';
import {FancyLine,FancyLineTwo,FooterContainer,FooterWrapper,FooterLinkContainer,FooterLinkWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './Elements';
import {Social,SocialWrapper,SocialLogo,Rights,SocialIconLink} from './Elements';
import {FaFacebook,FaTwitter,FaYoutube,FaLinkedin} from 'react-icons/fa';

function Footer() {
    return (
        <FancyLine>
            <FancyLineTwo />
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                                <FooterLink to="login">Number 1</FooterLink>
                                <FooterLink to="login">Number 2</FooterLink>
                                <FooterLink to="login">Number 3</FooterLink>
                                <FooterLink to="login">Number 4</FooterLink>
                                <FooterLink to="login">Number 5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                                <FooterLink to="login">Number 1</FooterLink>
                                <FooterLink to="login">Number 2</FooterLink>
                                <FooterLink to="login">Number 3</FooterLink>
                                <FooterLink to="login">Number 4</FooterLink>
                                <FooterLink to="login">Number 5</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                                <FooterLink to="login">Number 1</FooterLink>
                                <FooterLink to="login">Number 2</FooterLink>
                                <FooterLink to="login">Number 3</FooterLink>
                                <FooterLink to="login">Number 4</FooterLink>
                                <FooterLink to="login">Number 5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>ABOUT US</FooterLinkTitle>
                                <FooterLink to="login">Number 1</FooterLink>
                                <FooterLink to="login">Number 2</FooterLink>
                                <FooterLink to="login">Number 3</FooterLink>
                                <FooterLink to="login">Number 4</FooterLink>
                                <FooterLink to="login">Number 5</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <Social>
                    <SocialWrapper>
                        <SocialLogo>
                            S-LOGO
                        </SocialLogo>
                        <Rights> © {new Date().getFullYear()} All rights reserved.</Rights>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialWrapper>
                </Social>
            </FooterWrapper>
        </FooterContainer>
        </FancyLine>
    )
}

export default Footer;
