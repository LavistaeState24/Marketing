import { useEffect, useState } from "react";

export function useCountUp(target, active, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    let frameId;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);

    return () => window.cancelAnimationFrame(frameId);
  }, [active, duration, target]);

  return count;
}
