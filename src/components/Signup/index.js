import React, { useState, useRef } from 'react'
import { isEmail } from "validator";
import {Container,FormWrapper,Icon,FormContent,Forma,FormH1,FormLabel,FormInput,FormButton,Text,InvalidAlert} from './Elements';
import AuthService from '../../services/auth.service';
import {useHistory} from 'react-router-dom';

const required = (value) => {
    if (!value) {
      return (
          <InvalidAlert>This field is required!</InvalidAlert>
      );
    }
  };

const validEmail = (value) => {
    if (!isEmail (value)) {
      return (
          <InvalidAlert>This is not a valid email.</InvalidAlert>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
          <InvalidAlert>The username must be between 3 and 20 characters.</InvalidAlert>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
          <InvalidAlert>The password must be between 6 and 40 characters.</InvalidAlert>
      );
    }
  };


function Signup() {
        const history = useHistory();
        const form = useRef();
        const checkBtn = useRef();
        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [successful, setSuccessful] = useState(false);
        const [message, setMessage] = useState("");
      
        const onChangeFname = (e) => {
          const fname = e.target.value;
          setFname(fname);
        };
        
        const onChangeLname = (e) => {
          const lname = e.target.value;
          setLname(lname);
        };
        
        const onChangeUsername = (e) => {
          const username = e.target.value;
          setUsername(username);
        };
      
        const onChangeEmail = (e) => {
          const email = e.target.value;
          setEmail(email);
        };
      
        const onChangePassword = (e) => {
          const password = e.target.value;
          setPassword(password);
        };
      
        const handleRegister = (e) => {
          e.preventDefault();
      
          setMessage("");
          setSuccessful(false);
      
          form.current.validateAll();
      
          if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(fname, lname, username, email, password).then(
              (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                // history.push("/login");
                // window.location.reload();
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
      
                setMessage(resMessage);
                setSuccessful(false);
              }
            );
          }
        };

        return (
            <Container>
                <FormWrapper>
                    <Icon to="/">LOGO</Icon>
                    <FormContent>
                        <Forma onSubmit={handleRegister} ref={form}>
                          {!successful &&(
                            <div>
                            <FormH1>Register a new account</FormH1>
                            <FormLabel htmlFor="fname">First Name</FormLabel>
                            <FormInput type="text" name="fname" value={fname} onChange={onChangeFname} validations={[required]} />
                            <FormLabel htmlFor="lname">Last Name</FormLabel>
                            <FormInput type="text" name="lname" value={lname} onChange={onChangeLname} validations={[required]} />
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <FormInput type="text" name="email" value={email} onChange={onChangeEmail} validations={[required,validEmail]} />
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <FormInput type="username" name="username" value={username} onChange={onChangeUsername} validations={[required,vusername]} />
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormInput type="password" name="password" value={password} onChange={onChangePassword} validations={[required,vpassword]} />
                            <FormButton type="submit" ref={checkBtn}>Sign up</FormButton>
                            </div>
                            )}{message && (
                              <div className="form-group">
                                <div
                                  className={
                                    successful ? "alert alert-success" : "alert alert-danger"
                                  }
                                  role="alert"
                                >
                                  {message}
                                </div>
                              </div>
                            )}
                            {/* <Text>Forgot Password?</Text> */}
                        </Forma>
                    </FormContent>
                </FormWrapper>
            </Container>
    )
}

export default Signup;
