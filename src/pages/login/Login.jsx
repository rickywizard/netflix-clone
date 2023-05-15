import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase-config";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="NETFLIX"
                        onClick={() => navigate("/")}
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input 
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className="login__button" onClick={login}>Sign In</button>
                    <span>New to Netflix? <b onClick={() => navigate("/")}>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
};

export default Login;