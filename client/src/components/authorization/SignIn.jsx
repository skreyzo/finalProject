import React, {useState} from 'react';

import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {signIn} from "../../actions/user";
import { Typography, Button } from "@mui/material";

import styles from "./signIn.module.css";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    // const resetValueInput = (event) => {
    //     event.preventDefault();
    //     setEmail('');
    //     setPassword('');
    // }

    return (
        <div className={styles.authorization}>
            <Typography  
                style={{color: "#007FFF", marginLeft: "20%"}}
                className="registration__header"
                variant="h4"
            >  
            Please log in
            </Typography> 
            <Input value={email} setValue={setEmail} type="email" label="Enter your email..."/>
            <Input value={password} setValue={setPassword} type="password" label="Enter your password..."/>
            <Button style={{marginLeft: "60%"}} variant="outlined" className="registration__btn" onClick={() => dispatch(signIn(email, password))}>Log In</Button>
        </div>
    );
};

export default SignIn;