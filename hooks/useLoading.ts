import { useState, useEffect } from "react";

export function useLoading(minLoadingTime = 3000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisisted");
    const start = Date.now();

    if (!hasVisited) {
      const elapsedTime = Date.now() - start;
      setTimeout(() => {
        localStorage.setItem("hasVisited", "true");
        setIsLoading(false);
      }, Math.max(0, minLoadingTime - elapsedTime));
    } else {
      const elapsedTime = Date.now() - start;
      setTimeout(
        () => setIsLoading(false),
        Math.max(0, minLoadingTime - elapsedTime)
      );
    }
  }, [minLoadingTime]);

  return isLoading;
}

export default useLoading;
