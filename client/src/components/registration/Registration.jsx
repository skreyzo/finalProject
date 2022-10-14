import React, {useState} from 'react';

import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

import { useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";

import styles from "./registration.module.css";

const Registration = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const redirect = (event) => {
        event.preventDefault();
        navigate("/signin");
    }

    return (
        <div className={styles.registration}>
            <Typography 
            style={{color: "#007FFF", marginLeft: "20%"}}
            className="registration__header"
            variant="h4"
            > 
            Registration new user
            </Typography> 
            <form onSubmit={redirect}>
                <Input value={firstName} setValue={setFirstName} type="text" label="Enter your first name..."/>
                <Input value={lastName} setValue={setLastName} type="text" label="Enter your last name..."/>
                <Input value={email} setValue={setEmail} type="email" label="Enter your email..."/>
                <Input value={password} setValue={setPassword} type="password" label="Enter your password..."/>
                <Button style={{marginLeft: "60%"}} variant="outlined" className="registration__btn" type="submit" onClick={() => registration(firstName, lastName, email, password)}>Sign Up</Button>
            </form>
        </div>
        );
    };

export default Registration;
