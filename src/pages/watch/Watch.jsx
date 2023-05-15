import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import "./watch.scss"
import { useNavigate } from "react-router-dom";

const Watch = () => {

    const navigate = useNavigate()

    return (
        <div className="watch">
            <div className="back" onClick={() => navigate("/home")}>
                <ArrowBackOutlined />
                Home
            </div>
            <iframe 
                className="video"
                src="https://www.youtube.com/embed/IN5TD4VRcSM?&autoplay=1" 
                title="All of Us Are Dead" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            />
        </div>
    );
};

export default Watch;