import React, {useState} from 'react';

import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="email" label="Enter your email..."/>
            <Input value={password} setValue={setPassword} type="password" label="Enter your password..."/>
            <button className="registration__btn" onClick={() => registration(email, password)}>SignUp</button>
        </div>
    );
};

export default Registration;