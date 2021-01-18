import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const DropdownContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 300ms ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: white;
    transition: 200ms ease-in-out;

    &:hover{
        color: lime;
        transition: 200ms ease-in-out;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const DropdownWrapper = styled.div`
    color: white;
`

export const DropdownMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const DropdownLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 200ms ease-in-out;
    color: white;
    cursor: pointer;

    &:hover{
        color: lime;
        transition: 200ms ease-in-out;
    }
`

export const DropdownBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const DropdownRoute = styled(LinkRouter)`
    border-radius: 10px;
    background: green;
    white-space: nowrap;
    padding: 16px 64px;
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
    }
`

