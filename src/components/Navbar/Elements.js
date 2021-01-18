import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: black;
    box-shadow: 0px 5px 30px 20px ${({scrollNav}) => (scrollNav ? 'transparent' : 'black')};
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 800ms all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: white;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        color: white;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavScrollLink = styled(LinkScroll)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        transition: all 200ms ease-in-out;
        color: lime;
    }

    &.active{
        border-bottom: 3px solid green;
    }
`

export const NavRouterLink = styled(LinkRouter)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        transition: all 200ms ease-in-out;
        color: lime;
    }

    &.active{
        border-bottom: 3px solid green;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 10px;
    background: green;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    // outline: none;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 200ms ease-in-out;
        background: white;
        color: #010606;
    }
`

export const NavBtnIconLink = styled(LinkRouter)`
    padding: 0px;
    margin: 0;
    color: white;
    font-size: 2.5rem;
    display: flex;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        transition: all 200ms ease-in-out;
        color: lime;
    }
`

export const NavBtnIconLinkLogOut = styled(LinkRouter)`
    padding: 0px;
    margin: 0;
    color: white;
    font-size: 1rem;
    display: flex;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 200ms ease-in-out;
        color: lime;
    }
`