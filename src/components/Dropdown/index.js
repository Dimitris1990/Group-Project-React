import React from 'react';
import {DropdownContainer,Icon,CloseIcon,DropdownWrapper,DropdownMenu,DropdownLink,DropdownBtnWrap,DropdownRoute} from './Elements';

function Dropdown({toggle,isOpen}) {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    <DropdownLink to="market" onClick={toggle}>Market</DropdownLink>
                    <DropdownLink to="services" onClick={toggle}>Services</DropdownLink>
                    <DropdownLink to="about" onClick={toggle}>About</DropdownLink>
                    <DropdownLink to="signup" onClick={toggle}>Sign Up</DropdownLink>
                </DropdownMenu>
                <DropdownBtnWrap>
                    <DropdownRoute to="/login">Login</DropdownRoute>
                </DropdownBtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown;
