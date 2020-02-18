import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function Canvas() {
  const [size, setSize] = useState({
    width: Math.floor(window.innerWidth / 2),
    height: Math.floor(window.innerHeight / 2),
  });
  const mousePos = useRef(null);
  const ctx = useRef(null);
  const startTime = useRef(0);
  const particles = useRef([]);
  const canvas = useRef(null);
  // resize canvas element
  useEffect(() => {
    function handleResize() {
      setSize({
        width: Math.floor(window.innerWidth / 2),
        height: Math.floor(window.innerHeight / 2),
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSize]);
  // track mouse position
  useEffect(() => {
    console.log('mousemove');
    function handleMouseMove(e) {
      mousePos.current = {
        x: Math.floor(e.clientX / 2),
        y: Math.floor(e.clientY / 2),
      };
    }
    // function handleMouseLeave(e) {
    //   setMousePos(null);
    //   console.log('leaving!');
    // }
    // window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePos]);

  // Once the canvas element loads, save the context and start the animatino
  useEffect(() => {
    if (canvas.current && !ctx.current) {
      ctx.current = canvas.current.getContext('2d');
    }
  }, [canvas]);

  // helper fns for the animation
  function drawParticle(p) {
    console.log(p);
    ctx.current.fillRect(p.x, p.y, 1, 1);
  }
  function moveParticle(p) {
    p.x += p.vx;
    p.y += p.vy;
    return p;
  }
  function accelParticle(p, v) {
    p.vx += v.x;
    p.vy += v.y;
    return p;
  }
  // draw animation frame
  const draw = useCallback(
    t => {
      ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
      if (!startTime.current) {
        startTime.current = t;
      }
      const progress = t - startTime.current;
      if (particles.current.length < 40 && mousePos.current) {
        particles.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          vx: Math.floor(Math.random() * 6 - 3),
          vy: 0,
        });
      }
      if (progress > 50 && mousePos.current) {
        console.log('resetting!');
        startTime.current = t;
        particles.current.shift();
        particles.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          vx: Math.floor(Math.random() * 6 - 3),
          vy: 0,
        });
      }
      particles.current.forEach(p => {
        accelParticle(p, { x: 0, y: 0.1 });
        moveParticle(p);
        drawParticle(p);
      });
      window.requestAnimationFrame(draw);
    },
    [mousePos, startTime, particles, canvas, ctx]
  );

  useEffect(() => {
    if (ctx.current) {
      window.requestAnimationFrame(draw);
    }
  }, [ctx]);

  const { width, height } = size;
  return (
    <canvas
      width={`${width}px`}
      height={`${height}px`}
      id="bg-animate"
      ref={canvas}
    />
  );
}
