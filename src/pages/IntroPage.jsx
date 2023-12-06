import React from 'react';
import '../App.css';

function IntroPage() {

    const moveTo = () => {
        window.location.href = "/login";
    }

    const signUpButton = () => {
      window.location.href = "/Register";
  }

  return (
    <div className="IntroPage">
      <div className="login-button">
        <button className="btn btn-primary" style={{marginRight: '10px'}} onClick={moveTo}>Log in</button>
        <button className="btn btn-secondary" onClick={signUpButton}>Sign up</button>
      </div>
      <div className="intro-content">
        
        <h1 className="IntroExp">want you watch interest content? use it!</h1>
        <p className="small-text">
            <div className="IntroExp">
                Welcome to our OTT streaming service, where entertainment knows no bounds. Explore a vast library of movies, series, documentaries, and more, tailored to suit every taste. Enjoy seamless access to premium content anytime, anywhere, on any device. Dive into a world of captivating stories and immersive experiences curated just for you. Join us and elevate your entertainment journey with the best of what OTT has to offer.
            </div>
        </p>
      </div>
    </div>
  );
}

export default IntroPage;