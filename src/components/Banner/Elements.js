import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

export const BannerContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: start;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px){
        justify-content: center;
    }
`

export const BannerBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    //-------------------------
    width: 100%;
    //-------------------------
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width:100%;
    //--------------------------
    height:100%;
    //--------------------------
    --o-object-fit: cover;
    object-fit: cover;
    //--------------------------
    background: #232a34;
    filter: blur(5px) brightness(50%);
`

export const BannerContent = styled.div`
    border-radius: 10px;
    background-color: black;
    opacity: 0.8;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    margin-left: 10%;
    padding: 18px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 0 0 50px white; 
    -moz-box-shadow: 0 0 50px white; 
    box-shadow: 0 0 50px white;
    
    @media screen and (max-width: 768px){
        margin-left: 0%;

    }

    @media screen and (max-width: 480px){
        margin-left: 0%;

    }

`

export const BannerH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const BannerP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const BannerBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BannerBtn = styled(LinkScroll)`
    border-radius: 10px;
    background: #222b5a;
    // white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 200ms ease-in-out;
        background: white;
        color: #010606;
        -webkit-box-shadow:0 0 10px lime; 
        -moz-box-shadow: 0 0 10px lime; 
        box-shadow:0 0 10px lime;
            
    }
`