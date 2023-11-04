import React from 'react';
import './splash.css';
import splashImage from './Laguadaluana.png'; 

function SplashScreen() {
    return (
    <div className="splash-screen">
      {/* Diseña tu pantalla de presentación aquí */}
        <h1>Tostadería La Guadalupana</h1>
        <img src={splashImage} alt="Splash Screen" />
        
    </div>
);
}

export default SplashScreen;