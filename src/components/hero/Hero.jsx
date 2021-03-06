import React from 'react';
import Button from '../button/Button';
import './hero.scss';
import { CgPlayButtonO } from 'react-icons/cg';

function Hero() {
  return (
    <div className="hero-container">
      <video src="./videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVANTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonSize="btn--large">
          WATCH TRAILER <CgPlayButtonO className="play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
