import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { AppContext } from '../App.jsx';

export default function Canvas() {
  const { hover } = useContext(AppContext);
  const hoverRef = useRef(null);

  // Get hovered DOM rectangle from context; calculate
  // center point; set mutable ref variable to rectangle
  useEffect(() => {
    if (!hover) {
      hoverRef.current = hover;
      return;
    }
    const { x, y, width, height } = hover;
    const center = { x: x + width / 2, y: y + height / 2 };
    hover.center = center;
    hoverRef.current = hover;
  }, [hover]);

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // acceleration applied to each particle:
  const accel = useRef({ x: 0, y: 0.1 });
  const ctx = useRef(null);
  const startTime = useRef(0);
  const particles = useRef([]);
  const canvas = useRef(null);
  const colorIdx = useRef(0);
  const colors = ['#b58900', '#d33682', '#2aa198', '#268bd2', '#dc322f'];

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

  // Once the canvas element loads, save the context and start the animation
  useEffect(() => {
    if (canvas.current && !ctx.current) {
      ctx.current = canvas.current.getContext('2d');
    }
  }, [canvas]);

  /**
   * Particle object: { x: Number, y: Number, vx: Number, vy: Number }
   * x and y represent a position vector
   * vx and vy represent a velocity vector
   *
   * Animation functions/logic go below
   */
  function randomVal(max) {
    return Math.random() * max;
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

  const generateNewParticle = hoverRect => {
    const { x, y, width, height, center } = hoverRect;
    // Randomize the edge of the rectangle that this particle spawns on
    const rand = Math.random() * 4;
    let edge = 0; // Top
    if (rand > 1) edge = 1; // Bottom
    if (rand > 2) edge = 2; // Left
    if (rand > 3) edge = 3; // Right

    // Once the edge is chosen, randomize the position on the edge;
    // create a particle object with coordinates
    let particle = {};
    if (edge === 0 || edge === 1) {
      particle.y = edge === 0 ? y : y + height;
      particle.x = x + Math.random() * width;
    } else {
      particle.y = y + Math.random() * height;
      particle.x = edge === 2 ? x : x + width;
    }

    // Initial velocity is away from the center of the object with an
    // amplitude of 1
    const velocityVector = {
      vx: (particle.x - center.x) / 20,
      vy: (particle.y - center.y) / 20,
    };
    const { vx, vy } = velocityVector;
    const velocityAmmt = Math.sqrt(vx * vx + vy * vy);
    const velocityCorrection = 2 / velocityAmmt;

    // Return particle with position, velocity, and color
    return {
      ...particle,
      vx: vx * velocityCorrection,
      vy: vy * velocityCorrection,
      color: randColor(),
    };
  };
  // draw animation frame
  const draw = useCallback(
    t => {
      ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);
      if (!startTime.current) {
        startTime.current = t;
      }
      const progress = t - startTime.current;
      if (progress > 30 && hoverRef.current) {
        startTime.current = t;
        // remove particle from list if we're at the max number;
        if (particles.current.length >= 100) particles.current.shift();
        // newParticle has random displacement from the mouse, and random velocity;
        const newParticle = generateNewParticle(hoverRef.current);
        particles.current.push(newParticle);
      } else if (progress > 30 && particles.current.length) {
        startTime.current = t;
        particles.current.shift();
      }
      particles.current.forEach(p => renderParticle(p, accel.current));
      window.requestAnimationFrame(draw);
    },
    [hoverRef, startTime, particles, canvas, ctx, accel]
  );

  useEffect(() => {
    if (ctx.current) {
      window.requestAnimationFrame(draw);
    }
  }, [ctx, particles]);

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
