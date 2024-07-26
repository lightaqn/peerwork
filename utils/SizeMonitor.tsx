import React, { useState, useEffect, useCallback } from "react";

interface ScrollValue {
  innerWidth: number;
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
});

const SizeMonitor: React.FC = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeMonitor;
