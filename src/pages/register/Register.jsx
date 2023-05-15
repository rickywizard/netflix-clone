import React, { useRef, useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message)
        });
    };
    
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="NETFLIX"
                        onClick={() => navigate("/")}
                    />
                    <button 
                        className="login__button" 
                        onClick={() => navigate("/login")}>
                            Sign In
                    </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className="input">
                        <input 
                            ref={emailRef}
                            type="email" 
                            placeholder="Email address" 
                        />
                        <button className="register__button" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <button type="submit" className="register__button" onClick={register}>Start</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;