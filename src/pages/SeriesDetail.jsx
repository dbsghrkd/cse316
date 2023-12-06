import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/TVlist';
import Nav from '../Nav';

const moveTo = () => {
    window.location.href = "/Running";
  }

function SeriesDetail() {
    const { name } = useParams();
    const { overview } = useParams();
    const { state } = useLocation();
    console.log(state.name);
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
                    <div style={{ fontSize: "32px" }}>{state.name}</div>
                    <div style={{ fontSize: "20px",  marginTop: '100px' }}>{state.overview}</div>
                    <button className="btn btn-primary" style={{marginTop: '170px'}} onClick={moveTo}>Watch this!</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SeriesDetail;