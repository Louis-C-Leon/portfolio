import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function Canvas() {
  // const [size, setSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // acceleration applied to each particle:
  const accel = useRef({ x: 0, y: 0.1 });
  const mousePos = useRef(null);
  const ctx = useRef(null);
  const startTime = useRef(0);
  const particles = useRef([]);
  const canvas = useRef(null);
  const emitting = useRef(null);
  const colorIdx = useRef(0);
  const colors = ['#86D27B', '#1DA385', '#DEF2FF', '#98ACCF'];
  // resize canvas element:
  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSize]);

  // track mouse events:
  useEffect(() => {
    let timeout = null;
    // On mouse move, track mouse position and start emitting particles until
    // no mousemove events fire for .5s
    function handleMouseMove(e) {
      e.stopPropagation();
      emitting.current = true;
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        emitting.current = false;
      }, 500);
    }
    // Clear mouse position and stop emitting particles if mouse leaves window
    function handleMouseOut(e) {
      mousePos.current = null;
      emitting.current = false;
    }
    // Set random "gravity" (acceleration vector) for particles on mouseclick
    function randomAcceleration() {
      const a = { x: (Math.random() - 0.5) / 2, y: Math.random() - 0.5 };
      accel.current = a;
    }

    window.addEventListener('click', randomAcceleration);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousemove', handleMouseMove);
    return function cleanup() {
      window.removeEventListener('click', randomAcceleration);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mousePos, accel, emitting]);

  // Once the canvas element loads, save the context and start the animatino
  useEffect(() => {
    if (canvas.current && !ctx.current) {
      ctx.current = canvas.current.getContext('2d');
    }
  }, [canvas]);

  /**
   * Particle object: { x: Number, y: Number, vx: Number, vy: Number }
   * x and y represent a position vector
   * vx and vy represent a velocity vector
   */

  /**
   * Animation functions/logic go below
   */
  function randomVal(max) {
    return Math.random() * max - max / 2;
  }
  function drawParticle(p) {
    ctx.current.fillStyle = p.color;
    ctx.current.fillRect(p.x, p.y, 4, 4);
  }
  function moveParticle(p) {
    // Apply current velocity
    p.x += p.vx;
    p.y += p.vy;
    // Particle bounces off canvas edges
    if (p.x < 0) {
      p.x = 0;
      p.vx = p.vx * -1 * 0.5;
      p.vy = p.vy * 0.5;
    } else if (p.x > canvas.current.width) {
      p.x = canvas.current.width;
      p.vx = p.vx * -1 * 0.5;
      p.vy = p.vy * 0.5;
    }
    if (p.y < 0) {
      p.y = 0;
      p.vx = p.vx * 0.5;
      p.vy = p.vy * -1 * 0.5;
    } else if (p.y > canvas.current.height) {
      p.y = canvas.current.height;
      p.vx = p.vx * 0.5;
      p.vy = p.vy * -1 * 0.5;
    }
    return p;
  }
  // accelParticle takes a second argument v;
  // v is an acceleration vector to add to the particle's velocity vector
  // v: { x: Number, y: Number }
  function accelParticle(p, v) {
    p.vx += v.x;
    p.vy += v.y;
    return p;
  }

  // Get random color for drawing particle;
  function randColor() {
    const color = colors[colorIdx.current];
    colorIdx.current = (colorIdx.current + 1) % colors.length;
    return color;
  }

  // renderParticle calls the other animation functions
  function renderParticle(p, v) {
    accelParticle(p, v);
    moveParticle(p);
    drawParticle(p);
  }
  // draw animation frame
  const draw = useCallback(
    t => {
      ctx.current.fillStyle = '#11151C';
      ctx.current.fillRect(0, 0, canvas.current.width, canvas.current.height);
      if (!startTime.current) {
        startTime.current = t;
      }
      const progress = t - startTime.current;
      if (progress > 30 && mousePos.current && emitting.current) {
        startTime.current = t;
        // remove particle from list if we're at the max number;
        if (particles.current.length >= 100) particles.current.shift();
        // newParticle has random displacement from the mouse, and random velocity;
        const newParticle = {
          x: mousePos.current.x + randomVal(10),
          y: mousePos.current.y + randomVal(10),
          vx: randomVal(10),
          vy: randomVal(10),
          color: randColor(),
        };
        particles.current.push(newParticle);
      }
      particles.current.forEach(p => renderParticle(p, accel.current));
      window.requestAnimationFrame(draw);
    },
    [mousePos, startTime, particles, canvas, ctx, accel, emitting]
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
