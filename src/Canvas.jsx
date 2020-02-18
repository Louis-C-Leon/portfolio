export default function Canvas() {
  const [size, setSize] = useState({
    width: Math.floor(window.innerWidth / 2),
    height: Math.floor(window.innerHeight / 2),
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ctx, setCtx] = useState(null);
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
    function handleMouseMove(e) {
      setMousePos({
        x: Math.floor(e.clientX / 2),
        y: Math.floor(e.clientY / 2),
      });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setMousePos]);
  // draw animation frame
  const draw = useCallback(() => {
    ctx.fillRect(mousePos.x, mousePos.y, 10, 10);
    window.requestAnimationFrame(draw);
  }, [mousePos]);

  useEffect(() => {
    if (ctx) {
      window.requestAnimationFrame(draw);
    }
  }, [ctx, draw]);

  useEffect(() => {
    if (canvas.current) {
      setCtx(canvas.current.getContext('2d'));
    }
  }, [canvas, setCtx]);

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
