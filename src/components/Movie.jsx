import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/"

function Movie( props ) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/Movie/${props.title}`, {
            state: props
        })    
    }
    
    return (
        <div className="movieContainer" onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="posterOfMovie" />
            <div className="movieInfo">
                <h5 style={{fontSize: '20px'}}>{props.title}</h5>
                <span>{props.vote_average}</span>
            </div>
            </div>
        
    )
}

export default Movie;