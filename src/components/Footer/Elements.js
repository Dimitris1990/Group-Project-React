import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';

export const FancyLine = styled.div`
    width: 100%;
`

export const FancyLineTwo = styled.div`
    height: 5px;
    animation: rotate 3s infinite linear;
    -webkit-animation: rotate 3s infinite linear;

    @-webkit-keyframes rotate {
        from {
        background-position: -3000px;
        }
        to { 
        background-position: 0px;
        }
    }
    
    @keyframes rotate {
        from {
        background-position: -3000px;
        }
        to { 
        background-position: 0px;
        }
    }

    background: rgb(48,255,144); /* Old browsers */
    background: -moz-linear-gradient(left,  rgba(48,255,144,1) 0%, rgba(237,45,237,1) 25%, rgba(201,152,38,1) 50%, rgba(48,255,230,1) 75%, rgba(48,255,144,1) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(48,255,144,1)), color-stop(25%,rgba(237,45,237,1)), color-stop(50%,rgba(201,152,38,1)), color-stop(75%,rgba(48,255,230,1)), color-stop(100%,rgba(48,255,144,1))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(left,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* IE10+ */
    background: linear-gradient(to right,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#30ff90', endColorstr='#30ff90',GradientType=1 ); /* IE6-9 */
`

export const FooterContainer = styled.footer`
    background-color: black;
`

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(LinkRouter)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 300ms ease-in-out;
    }
`

export const Social = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    // @media screen and (max-width: 820px){
    //     flex-direction: column;
    // }
`

export const SocialLogo = styled.div`
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
`

export const Rights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`