import React from 'react';
import Nav from '../Nav';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';

function MovieDetail() {
    const { title } = useParams();
    const { overview } = useParams();
    const { state } = useLocation();
    console.log(title);
    console.log(state);
    return (
        <div className="MovieDetail">
             <Nav />
            <div className="pageContainer">
                <div style={{display: "flex"}}>
                    <img
                    style={{ width: "300px", height: "450px"}} 
                    src={IMG_BASE_URL + state.poster_path} 
                    alt="posterImage" />
                    <div>
                        <div style={{ fontSize: "32px" }}>{title}</div>
                        <div style={{ fontSize: "20px" }}>{overview}</div>
                    </div>
                </div>
                <button style={{display: "flex"}}>Watching it</button>
            </div>
        </div>
    );
}

export default MovieDetail;