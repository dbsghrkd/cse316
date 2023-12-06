import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/"

function TVlist( props ) {
    const navigate = useNavigate();

    const onClickSeriesItem = () => {
        
        navigate(`/Series/${props.name}`, {
            state: props
        })    
    }
    
    return (
        <div className="movieContainer" onClick={onClickSeriesItem}>
            <img src={IMG_BASE_URL + props.poster_path} alt="posterOfSeries" />
            <div className="movieInfo">
                <h5 style={{fontSize: '20px'}}>{props.name}</h5>
                <span>{props.vote_average}</span>
            </div>
            </div>
        
    )
}

export default TVlist;