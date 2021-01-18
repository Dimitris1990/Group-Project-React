import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
                90deg,
                rgb(47, 55, 90)40%,
                rgba(0,147,122,1)100%);
`

export const FormWrapper =styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        height: 80px;
    }
`

export const Icon = styled(LinkRouter)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 32px;

    &hover{
        text-decoration: none;
    }

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;

    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const Forma = styled(Form)`
    // background: #white;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    -webkit-box-shadow: 0 0 20px white; 
    -moz-box-shadow: 0 0 20px white; 
    box-shadow: 0 0 20px white;

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled(Input)`
    padding: 16px 0px;
    width: 100%;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled(CheckButton)`
    background: rgb(47, 55, 90);
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    -webkit-box-shadow: 0 0 20px white; 
    -moz-box-shadow: 0 0 20px white; 
    box-shadow: 0 0 20px white;
    padding: 16px 0;
    margin-top: 20px;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover{
        background-color: white;
        color: black;
        font-weight:bold;
        transition: 200ms ease-in-out;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`