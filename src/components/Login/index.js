import React, { useState, useRef } from 'react'
import AuthService from '../../services/auth.service';
import {Container,FormWrapper,Icon,FormContent,Forma,FormH1,FormLabel,FormInput,FormButton,Text} from './Elements';
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import { useHistory } from "react-router-dom";


function Login() {
    const form = useRef();
    const checkBtn = useRef();
    const history = useHistory();
    const currentUser = AuthService.getCurrentUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    const handleLogin = (e) => {
        e.preventDefault();
    
        setMessage("");
        setLoading(true);

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
              () => {
                history.push("/");
                window.location.reload();
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                setLoading(false);
                setMessage(resMessage);
              }
            );
          } else {
            setLoading(false);
          }
        };


    return (
        <Container>
            <FormWrapper>
                <Icon to="/">LOGO</Icon>
                <FormContent>
                    <Forma onSubmit={handleLogin} ref={form}>
                        <FormH1>Login to your account</FormH1>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <FormInput type="username" name="username" value={username} onChange={onChangeUsername} required />
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput type="password" name="password" value={password} onChange={onChangePassword} required />
                        <FormButton type="submit" ref={checkBtn}>Login</FormButton>
                        <Text>Forgot Password?</Text>
                    </Forma>
                </FormContent>
            </FormWrapper>
        </Container>
    )
}

export default Login;
