import React, {useState} from 'react';

import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {signIn} from "../../actions/user";

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
        <div className='authorization'>
            <div className="authorization__header">Авторизация</div>
            <Input value={email} setValue={setEmail} type="email" label="Enter your email..."/>
            <Input value={password} setValue={setPassword} type="password" label="Enter your password..."/>
            <button className="authorization__btn" onClick={() => dispatch(signIn(email, password))} /* onSubmit={resetValueInput} */>SignIn</button>
        </div>
    );
};

export default SignIn;