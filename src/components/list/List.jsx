import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import axios from "../../api/axios";

const List = ({ title, fetchUrl, isLargeRow }) => {

    const [isMoved, setIsMoved] = useState(false);

    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${1150 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 3) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-1150 + distance}px)`;
        }
    }

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="list">
            <h2 className="list__title">{title}</h2>
            <div className="wrapper">
                <ArrowBackIosOutlined 
                    className="slider left" 
                    onClick={() => handleClick("left")}
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    {movies.map((movie, idx) => (
                        ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <ListItem index={idx} key={movie.id} movie={movie} isLargeRow={isLargeRow} />
                        )
                    ))}
                </div>
                <ArrowForwardIosOutlined className="slider right" onClick={() => handleClick("right")} />
            </div>
        </div>
    );
};

export default List;