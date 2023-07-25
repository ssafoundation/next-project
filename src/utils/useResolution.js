import { useEffect, useState } from "react";

const useResolution = () => {
  const [resolution, setResolution] = useState({ width: 0 });
  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.screen.width,
      });
    };
    window.addEventListener("resize", handleResize);
    setResolution({
      width: window.screen.width,
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return resolution;
};

export default useResolution;
