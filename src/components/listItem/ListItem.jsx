import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./listItem.scss";
import { useNavigate } from "react-router-dom";

const ListItem = ({ index, movie, isLargeRow }) => {

    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    
    const base_url = "https://image.tmdb.org/t/p/original/";

    const trailer = "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQD8YXIDic6SKqHCe6LG6Zqe6_1LgK7Irr2zQ";

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }

    return (
        <div 
            className={`list__item ${isLargeRow && "row__poster"}`}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>

            <img
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={`${movie.name}`}
            />

            {isHovered && (
                <div 
                    className="hover"
                    style={{left: isHovered && index * 230 - 50 + index * 2.5}}
                >
                    <div className="image_video_container">
                        <img
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={`${movie.name}`}
                        />
                        <video
                            src={trailer}
                            autoPlay={true}
                            loop
                            muted
                        />
                    </div>
                    <div className="info_container">
                        <h3 className="name">
                            {movie.name || movie.title}
                        </h3>

                        <div className="icons">
                            <div className="controls">
                                <PlayArrow className="icon" title="play" onClick={() => navigate("/watch")} />
                                <ThumbUpAltOutlined className="icon" title="like" />
                                <ThumbDownAltOutlined className="icon" title="dislike" />
                                <Add className="icon" title="add" />
                            </div>
                        </div>

                        <div className="item__infoTop">
                            <span>1 hour 47 mins</span>
                            <span className="limit">17+</span>
                            <span>2023</span>
                        </div>

                        <div className="description">
                            {truncate(movie.overview, 100)}
                        </div>

                        <div className="genre">Action</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListItem;
