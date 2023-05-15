import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./featured.scss";
import axios from "../../api/axios";
import requests from '../../api/Requests';
import { useNavigate } from "react-router-dom";

const Featured = ({ type }) => {

    const navigate = useNavigate();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = type === "movies" ? requests.fetchMovies : requests.fetchNetflixOriginals;
            const request = await axios.get(data);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            
            return request;
        }

        fetchData();
    }, [type]);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }

    return (
        <div className="featured">
            {type === "movies" && (
                <div className="category">
                    <span>Movies</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            {type === "series" && (
                <div className="category">
                    <span>Series</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="action">Action & Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="sci-fi">Sci-fi & Fantasy</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <div className="banner" style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}>
                <div className="fade--bottom" />
            </div>
            <div className="info">
                <h1 className="title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <span className="desc">
                    {truncate(movie?.overview, 180)}
                </span>
                <div className="buttons">
                    <button className="play" onClick={() => navigate("/watch")}>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;