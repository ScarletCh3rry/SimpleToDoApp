import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyBtn from "../Components/UI/button/MyBtn";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className='login_container'>
            <h1 className='auth_text'>Authorize</h1>
            <form className='login_form' onSubmit={login}>
                <MyInput placeholder="Enter login" type="text"/>
                <MyInput placeholder="Enter password" type="password"/>
                <MyBtn>Log In</MyBtn>
            </form>
        </div>
    );
};

export default Login;