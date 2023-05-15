import React from "react";
import "./profilePage.scss";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { auth } from "../../utils/firebase-config";

const ProfilePage = () => {

    const user = useSelector(selectUser);

    return (
        <div className="profile__page">
            <Navbar />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png" alt="" />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <h3>Plans</h3>
                            <div className="plans__container">
                                <div className="plans__basic">
                                    <h5>Basic</h5>
                                    <h6>720p</h6>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="plans__container">
                                <div className="plans__standard">
                                    <h5>Standard</h5>
                                    <h6>4K + HDR</h6>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="plans__container">
                                <div className="plans__premium">
                                    <h5>Premium</h5>
                                    <h6>4K + HDR</h6>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <button 
                                className="profile__signOut" 
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;