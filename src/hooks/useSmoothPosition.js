import { useEffect, useRef, useState } from "react";

export default function useSmoothPosition(target, factor = 0.15) {
  const [pos, setPos] = useState(target);
  const current = useRef(target);

  useEffect(() => {
    let frame;
    const animate = () => {
      current.current = [
        current.current[0] + (target[0] - current.current[0]) * factor,
        current.current[1] + (target[1] - current.current[1]) * factor,
      ];
      setPos([...current.current]);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target[0], target[1]]);

  return pos;
}
