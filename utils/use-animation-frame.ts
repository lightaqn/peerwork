import React, { useCallback, useRef, useEffect } from "react";

const useAnimationFrame = (active: boolean, callback: () => void) => {
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    if (active) {
      requestRef.current = requestAnimationFrame(animate);

      return () => {
        if (requestRef.current) {
          return cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [active, animate]);
};

export default useAnimationFrame;
