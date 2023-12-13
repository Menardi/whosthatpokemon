import { useEffect, useRef, useState } from 'preact/hooks';

import { MILLISECONDS_BETWEEN_POKEMON } from '../constants';

type CountdownLoaderProps = {
  target?: number;
  size?: number;
  lineWidth?: number;
};

const degreesToRadians = (degrees: number) => {
  return (Math.PI / 180) * degrees - (Math.PI / 180) * 90;
};

/** Shows a loading arc, with the number of seconds remaining in the middle */
const CountdownLoader = ({
  target = MILLISECONDS_BETWEEN_POKEMON, size = 24, lineWidth = 2,
}: CountdownLoaderProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const canvasRenderSize = size * window.devicePixelRatio;
  const lineRenderWidth = lineWidth * window.devicePixelRatio;

  const [count, setCount] = useState(Math.ceil(target / 1000));

  useEffect(() => {
    const ctx = ref.current!.getContext('2d')!;

    const timeStarted = Date.now();
    let animationFrameId: number;

    const drawArc = () => {
      const timePassed = Date.now() - timeStarted;

      const progress = Math.min(timePassed / target, 1);

      ctx.clearRect(0, 0, canvasRenderSize, canvasRenderSize);
      ctx.beginPath();
      ctx.strokeStyle = '#fff';
      ctx.arc(
        canvasRenderSize / 2,
        canvasRenderSize / 2,
        (canvasRenderSize - lineRenderWidth) / 2,
        degreesToRadians(0),
        degreesToRadians(360 * progress),
      );
      ctx.lineWidth = lineRenderWidth;
      ctx.lineCap = 'square';
      ctx.stroke();

      setCount(Math.ceil((target - timePassed) / 1000));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(drawArc);
      }
    };

    drawArc();

    return () => cancelAnimationFrame(animationFrameId);
  }, [target]);

  return (
    <div className="countdown-loader">
      <canvas
        width={canvasRenderSize}
        height={canvasRenderSize}
        style={{ width: size, height: size }}
        ref={ref}
      />
      <span>{count}</span>
    </div>
  );
};

export default CountdownLoader;
