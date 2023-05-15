import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import React, { useState } from "react";
import "./navbar.scss";
import { auth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar__container">
                <div className="navbar__left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt="NETFLIX"
                        onClick={() => navigate("/home")}
                    />
                    <span onClick={() => navigate("/home")}>Home</span>
                    <span className="navbar__link" onClick={() => navigate("/series")}>Series</span>
                    <span className="navbar__link" onClick={() => navigate("/movies")}>Movies</span>
                    <span>My List</span>
                </div>

                <div className="navbar__right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img
                        src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
                        alt=""
                        onClick={() => navigate("/profile")}
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span onClick={() => navigate("/profile")}>Settings</span>
                            <span onClick={() => auth.signOut()}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;