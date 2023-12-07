import React from 'react';
import Nav from '../Nav';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Poster from '../assets/MoviePoster.jpeg';
import Poster2 from '../assets/ReadyPlayer.jpeg';
import Poster3 from '../assets/SearchMain.jpg';
const moveTo = () => {
  window.location.href = "/Running";
}

function Home() {

  return (
    <div className="Home">
      <Nav />
      <div className="upperSection">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{fontSize: '20px', textAlign: 'center'}}>
        "Today's Recommend Content! Enjoy and Have a Good Day!!"
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="image-wrapper">
              <img src={Poster} class="d-block w-100 img-fluid" alt="movie" style={{objectFit: "cover", height: '100%', filter: 'brightness(50%) blur(5px)'}}/>
              </div>
            <div class="carousel-caption d-none d-md-block">
            
              <h5 style={{fontSize: "40px"}}>LALA Land</h5>
              <p style={{marginBottom: "100px", fontSize: "20px"}}>When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.</p>
              <button className="btn btn-secondary" style={{marginBottom: "100px"}} onClick={moveTo}>Watch this right now!</button>
            </div>
          </div>
          <div class="carousel-item">
            <div className="image-wrapper">
              <img src={Poster2} class="d-block w-100" alt="movie" style={{objectFit: "cover", height: '100%', filter: 'brightness(50%) blur(5px)'}}/>
            </div>
          <div class="carousel-caption d-none d-md-block">
          
            <h5 style={{fontSize: "40px"}}>Ready Player one</h5>
            <p style={{marginBottom: "100px", fontSize: "20px"}}>When the creator of a virtual reality world called OASIS dies, he leaves a challenge behind. Hidden inside the virtual world is an Easter Egg, which grants a worthy person total control over OASIS.</p>
            <button className="btn btn-secondary" style={{marginBottom: "100px"}} onClick={moveTo}>Watch this right now!</button>
          </div>
        </div>
        <div class="carousel-item">
           <div className="image-wrapper">
            <img src={Poster3} class="d-block w-100" alt="movie" style={{objectFit: "cover", height: '100%', filter: 'brightness(50%) blur(5px)'}}/>
          
          </div>
        <div class="carousel-caption d-none d-md-block">
        
          <h5 style={{fontSize: "40px"}}>Free guy</h5>
          <p style={{marginBottom: "100px", fontSize: "20px"}}>Guy lives a seemingly peaceful life as a bank teller. However, an encounter with a pretty but mysterious woman makes him realise that he is a non-playable character in a massive online video game.</p>
          <button className="btn btn-secondary" style={{marginBottom: "100px"}} onClick={moveTo}>Watch this right now!</button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </div>
    
  );
}

export default Home;
