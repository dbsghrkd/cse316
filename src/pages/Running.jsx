import React from 'react';
import video from '../assets/video.jpeg';

function Running(){
    return(
        <div className="pageContainer">
            <img src={video} class="d-block w-100" alt="movie" style={{objectFit: "cover", height: '400px'}}/>
            <h1>This Page Means A Video Running!</h1>
            <p>This Page Should have contained video running.</p>
            <p>However, due to copyright problem we are could only show this page.</p>
            
        </div>
    );
}

export default Running;