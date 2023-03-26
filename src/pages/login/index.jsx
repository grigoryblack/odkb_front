import React from "react";
import {useLocalState} from "../../utils/useLocalState";
import {useState} from "react";
import {TextField} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {Checkbox} from "@mui/material";
import {Navigate} from "react-router-dom";
import "./LoginPage.css";

const Login = () =>{
    const [fullName,setFullName] = useLocalState('','fullName')
    const [jwt, setJwt] = useLocalState('', 'jwt')
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [usernameDirty, setUsernameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [usernameError,setUsernameError] = useState('Имя не может быть пустым!')
    const [passwordError,setPasswordError] = useState('Пароль не может быть пустым!')
    const [errorMsg,setErrorMsg] = useState("")

    function sendLoginRequest(){
        const reqBody = {
            username: username,
            password: password
        }

        fetch("http://localhost:8080/api/auth/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: JSON.stringify(reqBody)
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("OK");
                    return Promise.all([response.json(), response.headers]);
                } else if (response.status === 401){
                    setErrorMsg("Неверное имя пользователя или пароль")
                } else {
                    return Promise.reject("Invalid login response attempt");
                }
            })
            .then((response) => {
                console.log(response['0']['fullName'])
                setJwt(response['0']['token']);
                setFullName(response['0']['fullName'])
                window.location.href = "/"
            });
    }

    const usernameHandler = (e) =>{
        setUsername(e.target.value)
        const re = /[a-zA-Z]/i;
        if (!re.test(String(e.target.value).toLowerCase())){
            setUsernameError('Некорекное имя')
        } else {
            setUsernameError("")
        }
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
        if (!e.target.value) {
            setPasswordError('Пароль не может быть пустым!')
        } else {
            setPasswordError("")
        }
    }
    const blurHandler = (e) =>{
        switch (e.target.name){
            case 'username':
                setUsernameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return jwt?(
        <Navigate to="/"/>
            ):(
        <>
            <div className="container_login">
                <div className="login_form">
                    <div className="login_title"> Добро пожаловать!</div>
                    <div className="login_subtitle">Чтобы продолжить работу, пожалуйста, авторизируйтесь.</div>
                        <div className="input_container_login">
                            {(usernameDirty && usernameError) && <div className="notification_error">{ usernameError }</div>}
                            <TextField
                                className="input_login"
                                id="outlined-required"
                                label="Логин"
                                name = 'username'
                                value = {username}
                                onBlur={e =>blurHandler(e)}
                                onChange={e => usernameHandler(e)}
                            />
                        </div>
                        <div className="input_container_login">
                            {(passwordDirty && passwordError) && <div className="notification_error">{ passwordError }</div> }
                            <TextField
                                className="input_login"
                                id="outlined-password-input"
                                label="Пароль"
                                type="password"
                                autoComplete="current-password"
                                name = 'password'
                                value = {password}
                                onBlur={e=>blurHandler(e)}
                                onChange ={e => passwordHandler(e)}
                            />
                        </div>
                        <div className="login_error">
                            {errorMsg && <div className="notification_error"> {errorMsg} </div>}
                        </div>
                        <div className="login_button_container">
                            <button id="submit" className="login_button" onClick={()=>sendLoginRequest()} type="button"> Войти </button>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Запомнить меня" />
                        </div>
                </div>
            </div>
        </>

    );
}

export default Login;