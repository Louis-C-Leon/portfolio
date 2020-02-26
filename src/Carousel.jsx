// Carousel implementation taken from Florian Rappl:
// https://blog.logrocket.com/building-carousel-component-react-hooks/
// https://gist.github.com/FlorianRappl/fee731eea985d983fc48d10c648ecb17

import React from 'react';
import { useCarousel } from './hooks/useCarousel.js';
import arrow from './assets/icons/down-arrow.svg';
import './styles/Carousel.css';

export default function Carousel({ slides, interval = 7000 }) {
  const length = slides.length;
  const { active, setActive, next, prev, handlers, style } = useCarousel(
    length,
    interval
  );
  // debugger;
  const { width: fullWidth } = style;
  const itemWidth = String(10000 / Number(fullWidth.slice(0, -1))) + '%';
  const itemStyle = { width: itemWidth };
  return (
    length > 0 && (
      <div className="carousel">
        <div className="carousel-prev" onClick={prev}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="carousel-next" onClick={next}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="carousel-content" {...handlers} style={style}>
          <div className="carousel-item" style={itemStyle}>
            <img
              draggable="false"
              src={slides[slides.length - 1]}
              alt="screenshot"
            />
          </div>
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index} style={itemStyle}>
              <img
                draggable="false"
                src={slide}
                key={`${index}img`}
                alt="screenshot"
              />
            </div>
          ))}
          <div className="carousel-item" style={itemStyle}>
            <img draggable="false" src={slides[0]} alt="screenshot" />
          </div>
        </div>
      </div>
    )
  );
}
