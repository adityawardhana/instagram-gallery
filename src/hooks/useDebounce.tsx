import { useEffect } from "react";

const useDebounce = (callback: () => void, deps: any, delay: number) => {
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(timeoutHandler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps, delay]);
};

export default useDebounce;
