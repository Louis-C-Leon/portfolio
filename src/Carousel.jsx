import React from 'react';
import { useCarousel } from './hooks/useCarousel.js';
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
        <div className="carousel-prev" onClick={prev} />
        <div className="carousel-next" onClick={next} />
        {/* <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? 'active' : ''}`}
            />
          ))}
        </ol> */}
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
