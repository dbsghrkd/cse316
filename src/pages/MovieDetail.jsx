import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';
import Nav from '../Nav';

const moveTo = () => {
    window.location.href = "/Running";
  }

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
                style={{ width: "300px", height: "450px", marginRight: '30px'}} 
                src={IMG_BASE_URL + state.poster_path} 
                alt="posterImage" />
                <div>
                    <div style={{ fontSize: "32px" }}>{state.title}</div>
                    <div style={{ fontSize: "20px", marginTop: '100px' }}>{state.overview}</div>
                    <button className="btn btn-primary" style={{marginTop: '10px'}} onClick={moveTo}>Watch this!</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default MovieDetail;